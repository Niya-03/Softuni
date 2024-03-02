import { expect } from "chai";
import { isSymmetric } from "./checkForSymmetry.js";

describe('Suite', function () {
    it('returns true for symmetric array', () => {
        let arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false for other types', () => {
        let num = 121;
        expect(isSymmetric(num)).to.be.false;
    });

    it('returns false for asymmetric array', () => {
        let arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns true for symmetric array with odd amount of elements', () => {
        let arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false for array-like data', () => {
        let arr = '1221';
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns true for empty array', () => {
        let arr = [];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false if an element isnt a number', () => {
        let arr = ['1', 2, 1];
        expect(isSymmetric(arr)).to.be.false;
    });
});
