import { expect } from "chai";
import { findNewApartment } from "./findApartment.js";

describe('Test suite', function () {
    describe('function isGoodLocation', () => {
        it('works with Varna and true params', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });

        it('works with Sofia and true params', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });

        it('works with Plovdiv and true params', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        });

        it('returns correctly with invalid city', () => {
            expect(findNewApartment.isGoodLocation('Dobrich', true)).to.equal('This location is not suitable for you.');
        });

        it('returns correctly with false', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });

        it('returns invalid input with param different than string', () => {
            expect(() => findNewApartment.isGoodLocation(5, false)).to.throw('Invalid input!');
        });

        it('returns invalid input with param different than bool', () => {
            expect(() => findNewApartment.isGoodLocation('Varna', 1)).to.throw('Invalid input!');
        });
    });

    describe('function isLargeEnough', () => {
        it('throws error if apartments is not array', () => {
            expect(() => findNewApartment.isLargeEnough(40, 50)).to.throw('Invalid input!');
        })

        it('throws error if apartments is an empty array', () => {
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!');
        })

        it('throws error if minimalSquareMeters is not a number', () => {
            expect(() => findNewApartment.isLargeEnough([50], '20')).to.throw('Invalid input!');
        })

        it('returns correctly with correct params', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
        });
    })

    describe('function isItAffordable', () => {
        it('throws error if price is not a number', () => {
            expect(() => findNewApartment.isItAffordable('2', 100)).to.throw('Invalid input!');
        })

        it('throws error if budget is not a number', () => {
            expect(() => findNewApartment.isItAffordable(100, '2')).to.throw('Invalid input!');
        })

        it('throws error if price is < 0', () => {
            expect(() => findNewApartment.isItAffordable(-1, 100)).to.throw('Invalid input!');
        })

        it('throws error if price is 0', () => {
            expect(() => findNewApartment.isItAffordable(0, 100)).to.throw('Invalid input!');
        })

        it('throws error if budget is < 0', () => {
            expect(() => findNewApartment.isItAffordable(100, -1)).to.throw('Invalid input!');
        })

        it('throws error if budget is 0', () => {
            expect(() => findNewApartment.isItAffordable(100, 0)).to.throw('Invalid input!');
        })

        it('returns correctly with when result < 0', () => {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
        });

        it('returns correctly with when result > 0', () => {
            expect(findNewApartment.isItAffordable(1, 2)).to.equal("You can afford this home!");
        });
    })
});