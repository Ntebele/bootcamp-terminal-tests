import isFromGauteng from "../isFromGauteng";
import assert from "assert"

describe('Test my isFromGauteng function', function() {
    it('return true if is from gauteng, else return false', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(isFromGauteng('DR 45 LR GP'), true);
      assert.equal(isFromGauteng('CJ 123 908'), false);
    });
  });
  
  function isFromGauteng(registration) {
    if (registration.endsWith('GP')) {
      return true;
    } else {
      return false;
    }
  }