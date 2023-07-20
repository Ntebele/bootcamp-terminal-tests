import regCheck from "../regCheck";
import assert from "assert"

describe('Test my regCheck function', function() {
    it('should return true for these regnumbers GP, L, EC, MP incase they are consistent with the location code, else return false' , function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
      assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
  
      assert.equal(regCheck('5566 L', 'L'), true);
      assert.equal(regCheck('5566 L', 'M'), false);
  
      assert.equal(regCheck('ERT 123 EC', 'EC'), true);
      assert.equal(regCheck('ERT 123 EC', 'GP'), false);
  
      assert.equal(regCheck('FGT 123 MP', 'MP'), true);
      assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
  });
  
  function regCheck(registration, locationCode) {
    return registration.endsWith(locationCode);
  }
  