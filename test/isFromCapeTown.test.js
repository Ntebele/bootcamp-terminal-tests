import isFromCapeTown from "../isFromCapeTown";
import assert from "assert"

describe('Test my isFromCapeTown function', function() {
    it('It should return false is reg is from CapeTown, else return false', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(isFromCapeTown('CY 123'), false);
      assert.equal(isFromCapeTown('CJ 123'), false);
      assert.equal(isFromCapeTown('CA 123'), true);
    });
  });
  
 