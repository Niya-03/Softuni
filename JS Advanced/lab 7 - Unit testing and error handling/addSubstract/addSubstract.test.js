import { expect } from "chai";
import {createCalculator} from './addSubstract.js'

describe('Calculator', function () {
    let calc = null;
    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns zero initial value',()=>{
        expect(calc.get()).to.equal(0);
    });

    describe('number arguments', function()  {
        it('it can add numbers', ()=>{
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });
    
        it('it can add more than one number', ()=>{
            calc.add(1);
            calc.add(1)
            expect(calc.get()).to.equal(2);
        });
    
        it('it can subtract numbers', ()=>{       
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });
    
        it('it can subtract more than one number', ()=>{       
            calc.subtract(1);
            calc.subtract(1);
            expect(calc.get()).to.equal(-2);
        });
    
        it('it can add and subtract numbers', ()=>{       
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);
        });
    });

    describe('string arguments', function () {
        it('it can add numbers as strings', ()=>{       
            calc.add('1');
            expect(calc.get()).to.equal(1);
        });

        it('it can subtract numbers as strings', ()=>{       
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        });

        it('it can add and subtract numbers as strings', ()=>{       
            calc.add('2');
            calc.subtract('1')
            expect(calc.get()).to.equal(1);
        });
    });
  
});