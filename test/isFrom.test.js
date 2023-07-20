import isFrom from "../isFrom";
import assert from "assert"

describe('Test my isFrom funtion', function() {
    it('return true if is from Paarl, else return false', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      var fromPaarl = isFrom('CJ 98912', 'CJ');
      var fromBellville = isFrom('CJ 98912', 'CY');
      assert.equal(fromPaarl, true, 'Should be from Paarl');
      assert.equal(fromBellville, false, 'Should be from Bellville - starting with CY');
    });
  });
  
  function isFrom(registration, locationPrefix) {
    if (registration.startsWith(locationPrefix)) {
      return true;
    } else {
      return false;
    }
  }
  