import { expect } from "chai";
import { rgbToHexColor } from "./rgb-to-hex.js";

describe('Suite', function () {
    it('takes 3 valid integer numbers', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })

    it('returns undefined if red is above 255', () => {
        expect(rgbToHexColor(256,0,0)).to.equal(undefined);
    })

    it('returns undefined if red is below 0', () => {
        expect(rgbToHexColor(-1,0,0)).to.equal(undefined);
    })

    it('returns undefined if green is above 255', () => {
        expect(rgbToHexColor(0,256,0)).to.equal(undefined);
    })

    it('returns undefined if green is below 0', () => {
        expect(rgbToHexColor(0,-1,0)).to.equal(undefined);
    })

    it('returns undefined if blue is above 255', () => {
        expect(rgbToHexColor(0,0,256)).to.equal(undefined);
    })

    it('returns undefined if blue is below 0', () => {
        expect(rgbToHexColor(0,0,-1)).to.equal(undefined);
    })

    it('returns a string', () => {
        expect(typeof rgbToHexColor(0,0,0)).to.equal('string');
    })

    it('returns undefined if red data type is different than number', () => {
        expect(rgbToHexColor('1',0,0)).to.equal(undefined);
    })

    it('returns undefined if green data type is different than number', () => {
        expect(rgbToHexColor(0,'1',0)).to.equal(undefined);
    })

    it('returns undefined if blue data type is different than number', () => {
        expect(rgbToHexColor(0,0,'1')).to.equal(undefined);
    })

    it('returns in hexadecimal format', () => {
        expect(rgbToHexColor(0,0,0)[0]).to.equal('#');
    })

    it('returns correct length for hexadecimal format', () => {
        expect(rgbToHexColor(0,0,0).length).to.equal(7);
    })
})