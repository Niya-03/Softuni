import { expect } from "chai";
import { workforceManagement } from "./workforceManagement.js";

describe('Test suite', function () {
    describe('recruitStaff', ()=>{
        it('throws error when role isnt developer', ()=>{
            expect(() => workforceManagement.recruitStaff('branko', 'HR', 5)).to.throw('We are not currently hiring for this role.');
        })

        it('returns correctly when experience is < 4', ()=>{
            expect( workforceManagement.recruitStaff('branko', 'Developer', 3)).to.equal('branko is not suitable for this role.');
        })

        it('returns correctly when experience is = 4', ()=>{
            expect( workforceManagement.recruitStaff('branko', 'Developer', 4)).to.equal('branko has been successfully recruited for the role of Developer.');
        })

        it('returns correctly when experience is > 4', ()=>{
            expect( workforceManagement.recruitStaff('branko', 'Developer', 5)).to.equal('branko has been successfully recruited for the role of Developer.');
        })
    });

    describe('computeWages', ()=>{
        it('throws error when hoursWorked isnt a number', ()=>{
            expect(() => workforceManagement.computeWages('5')).to.throw('Invalid hours');
        })

        it('throws error when hoursWorked is < 0', ()=>{
            expect(() => workforceManagement.computeWages(-1)).to.throw('Invalid hours');
        })

        it('returns correctly when hours are valid', ()=>{
            expect( workforceManagement.computeWages(2)).to.equal(36);
        })

        it('returns correctly when hours are > 160', ()=>{
            expect( workforceManagement.computeWages(161)).to.equal(4398);
        })

        it('returns correctly when hours are = 160', ()=>{
            expect( workforceManagement.computeWages(160)).to.equal(2880);
        })
    });

    describe('dismissEmployee', ()=>{
        it('throws error when workforce isnt array', ()=>{
            expect(() => workforceManagement.dismissEmployee('Petar',2)).to.throw('Invalid input');
        })

        it('throws error when employeeIndex isnt number', ()=>{
            expect(() => workforceManagement.dismissEmployee(['Petar'],'1')).to.throw('Invalid input');
        })

        it('throws error when employeeIndex is outside of array', ()=>{
            expect(() => workforceManagement.dismissEmployee(['Petar'],1)).to.throw('Invalid input');
        })

        it('returns correctly when data is valid', ()=>{
            expect( workforceManagement.dismissEmployee(['Petar', 'Ivan', 'Gosho'], 2)).to.equal('Petar, Ivan');
        })
    });
});