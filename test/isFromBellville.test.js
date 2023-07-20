import assert from "assert";
import isFromBellville from "../isFromBellville.js";


describe('The isFromBellville function', function()
{
    it('should return true if the registartion number starts with "CY"', function()
    {
        assert.equal(isFromBellville('CY 123'), true);
    })
    it('should return false if the registartion number does not start with "CY"', function()
    {
        assert.equal(isFromBellville('CJ 123'), false);
    })
    
});

