import isFromBellville from "../isFromBellville";
import assert from "assert"

describe('this test', function() {
    it('should show you how to use MochaJS', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(isFromBellville('CY 123'), true);
      assert.equal(isFromBellville('CJ 123'), false);
    });
  });
  