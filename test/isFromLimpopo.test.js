import isFromLimpopo from "../isFromLimpopo";
import assert from "assert"

describe('Test my isFromLimpopo fuction', function() {
    it('it should return true if regNumber is from Limpopo, else return false ', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(isFromLimpopo('KTR 990 L'), true);
      assert.equal(isFromLimpopo('W 990 N'), false);
    });
  });
  
  function isFromLimpopo(registration) {
    if (registration.startsWith('KTR')) {
      return true;
    } else {
      return false;
    }
  }
  