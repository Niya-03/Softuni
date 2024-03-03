import { expect } from "chai";
import { mathEnforcer } from "./mathEnforcer.js";

describe('Math enforces', function () {

    describe('Add 5', function () {
        it('adds 5 succesfully with integer input', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        })

        it('adds 5 succesfully with float input', () => {
            expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
        })

        it('adds 5 succesfully with negative number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        })

        it('adds 5 succesfully with zero', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        })

        it('adds 5 succesfully with -5', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })

        it('adds 5 unsuccesfully with string input', () => {
            expect(mathEnforcer.addFive('word')).to.equal(undefined);
        })

        it('adds 5 unsuccesfully with number in string format input', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        })


        it('adds 5 unsuccesfully with array input', () => {
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        })
    })

    describe('subtract 10', function () {
        it('subtracts 10 succesfully with number input', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
        })

        it('subtracts 10 succesfully with negative number input', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        })

        it('subtracts 10 succesfully with zero', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })

        it('subtracts 10 succesfully with float input', () => {
            expect(mathEnforcer.subtractTen(11.5)).to.equal(1.5);
        })

        it('returns undefined when given string', () => {
            expect(mathEnforcer.subtractTen('word')).to.equal(undefined);
        })

        it('returns undefined when given number in string format', () => {
            expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
        })

        it('returns undefined when given array', () => {
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        })

    })

    describe('sum', function () {
        it('sums numbers succesfully', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        })

        it('sums numbers succesfully', () => {
            expect(mathEnforcer.sum(1, -1)).to.equal(0);
        })

        it('sums negative numbers succesfully', () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        })

        it('sums floating numbers succesfully', () => {
            expect(mathEnforcer.sum(1.5, 1)).to.equal(2.5);
        })

        it('sums floating numbers succesfully', () => {
            expect(mathEnforcer.sum(1, 1.5)).to.equal(2.5);
        })

        it('sum returns undefined when first arg is string', () => {
            expect(mathEnforcer.sum('word', 1)).to.equal(undefined);
        })

        it('sum returns undefined when first arg is number in string format', () => {
            expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
        })

        it('sum returns undefined when second arg is string', () => {
            expect(mathEnforcer.sum(1, 'word')).to.equal(undefined);
        })

        it('sum returns undefined when second arg is a number in string format', () => {
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
        })
    })

})