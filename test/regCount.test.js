import regCount from "../regCount";
import assert from "assert"

describe('Test my regCount function', function() {
    it('should return the number of registration numbers in the string', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
      assert.equal(regCount, 3);
  
      regCount = countRegNumber('CA 182736');
      assert.equal(regCount, 1);
    });
  });
  
  function countRegNumber(regNumbers) {
    var regList = regNumbers.split(',');
    return regList.length;
  }
  