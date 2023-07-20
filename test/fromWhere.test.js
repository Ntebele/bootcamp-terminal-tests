import assert from "assert";
import fromWhere from "../fromWhere.js";


describe('The fromWhere function', function()
{
    it('should return Bellville if the registration starts with "CY"', function()
    {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    })
    it('should return Paarl if the registration starts with "CJ"', function()
    {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    })
    it('should return Cape Town if the registration starts with "CA"', function()
    {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    })
    it('should return Some other place! if the registration does not start with "CY", "CJ" and "CA"', function()
    {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
});

