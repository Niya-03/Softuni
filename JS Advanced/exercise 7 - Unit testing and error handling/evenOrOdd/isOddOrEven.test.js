import {expect} from 'chai'
import { isOddOrEven } from './isOddOrEven.js'

describe('Odd or even func', function () {
    it('returns for even length', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    })

    it('returns for odd length', () => {
        expect(isOddOrEven('aaa')).to.equal('odd');
    })

    it('returns undefined for number', () => {
        expect(isOddOrEven(5)).to.equal(undefined);
    })

    it('returns undefined for array', () => {
        expect(isOddOrEven(['aaa'])).to.equal(undefined);
    })

})