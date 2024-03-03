import { expect } from "chai";
import { lookupChar } from "./charLookUp.js";

describe ('Lookup function', function () {
    it('returns correct output with correct input', () => {
        expect(lookupChar('dog', 1)).to.equal('o');
    })

    it('returns correct output with correct input', () => {
        expect(lookupChar('abbcbba', 3)).to.equal('c');
    })

    it('returns undefined if first arg is a number', () => {
        expect(lookupChar(333, 1)).to.equal(undefined);
    })

    it('returns undefined if first arg is an array', () => {
        expect(lookupChar(['dog'], 1)).to.equal(undefined);
    })

    it('returns undefined if second arg is not a number', () => {
        expect(lookupChar('dog', '1')).to.equal(undefined);
    })

    it('returns incorrect index if index is bigger than string length', () => {
        expect(lookupChar('dog', 4)).to.equal('Incorrect index');
    })

    it('returns incorrect index if index is equal to string length', () => {
        expect(lookupChar('dog', 3)).to.equal('Incorrect index');
    })

    it('returns incorrect index if index is negative', () => {
        expect(lookupChar('dog', -1)).to.equal('Incorrect index');
    })

    it('returns undefined if index is array', () => {
        expect(lookupChar('dog', [1])).to.equal(undefined);
    })

    it('returns incorrect index if empty string is given', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    })

    it('returns incorrect index if index is floating point', () => {
        expect(lookupChar('dog', 1/3)).to.equal('Incorrect index');
    })
})