import { expect } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js";

describe("Test suite", function(){
    describe('isPetAvailable', () => {
        it('doesnt work when pet isnt string', () => {
            expect(() =>petAdoptionAgency.isPetAvailable(['dog'], 4, true)).to.throw('Invalid input');
        });

        it('doesnt work when availableCount isnt number', () => {
            expect(() =>petAdoptionAgency.isPetAvailable('dog', '4', true)).to.throw('Invalid input');
        });

        it('doesnt work when vaccinated isnt boolean', () => {
            expect(() =>petAdoptionAgency.isPetAvailable('dog', 4, 1)).to.throw('Invalid input');
        });

        it('returns correctly when available count < 0', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', -4, true)).to.equal('Sorry, there are no dog(s) available for adoption at the agency.');
        });

        it('returns correctly when available count = 0', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 0, true)).to.equal('Sorry, there are no dog(s) available for adoption at the agency.');
        });

        it('returns correctly when available count > 0 and vaccinated = true', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 4, true)).to.equal('Great! We have 4 vaccinated dog(s) available for adoption at the agency.');
        });

        it('returns correctly when available count > 0 and vaccinated = false', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 4, false)).to.equal('Great! We have 4 dog(s) available for adoption, but they need vaccination.');
        });
    });

    describe('getRecommendedPets', ()=>{
        it('doesnt work when petList isnt array', () => {
            expect(() =>petAdoptionAgency.getRecommendedPets('dog', 'fluffy')).to.throw('Invalid input');
        });

        it('doesnt work when desiredTraits isnt string', () => {
            expect(() =>petAdoptionAgency.getRecommendedPets([{name: 'branko', traits: 'fluffy'}], 4)).to.throw('Invalid input');
        });

        it('returns correctly when pet with desired trait is found', () => {
            expect(petAdoptionAgency.getRecommendedPets([{name: 'branko', traits: 'fluffy'}], 'fluffy')).to.equal('Recommended pets with the desired traits (fluffy): branko');
        });

        it('returns correctly when pet with desired trait is not found', () => {
            expect(petAdoptionAgency.getRecommendedPets([{name: 'branko', traits: 'fluffy'}], 'small')).to.equal('Sorry, we currently have no recommended pets with the desired traits: small.');
        });
    });

    describe('adoptPet', ()=>{
        it('doesnt work when pet isnt string', () => {
            expect(() =>petAdoptionAgency.adoptPet(1, 'jacob')).to.throw('Invalid input');
        });

        it('doesnt work when adopterName isnt string', () => {
            expect(() =>petAdoptionAgency.adoptPet('branko', 1)).to.throw('Invalid input');
        });

        it('returns correctly when pet and adopterNmae are valid', () => {
            expect(petAdoptionAgency.adoptPet('branko', 'jacob')).to.equal('Congratulations, jacob! You have adopted branko from the agency. Enjoy your time with your new furry friend!');
        });
    })
});