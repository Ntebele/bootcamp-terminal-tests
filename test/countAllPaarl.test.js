import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";


describe('The greet function', function()
{
    it('should return the number of registration numbers that start with "CJ"', function()
    {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
    
});
