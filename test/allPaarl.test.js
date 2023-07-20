import assert from "assert";
import allPaarl from "../allPaarl.js";

var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

var regNumbersForPaarl = allPaarl(regNumbers);
console.log('test running');

describe('The allPaarl function', function()
{
    it('should return the number of registration numbers from Paarl', function() {
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);

    })
    
});

