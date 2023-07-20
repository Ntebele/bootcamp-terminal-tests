import yearsAgo from "../yearsAgo";
import assert from "assert"

describe('Test my yers ago function', function() {
    it('should return how many years ago that year is from the current year', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
      assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
  });
  
  function yearsAgo(year) {
    return new Date().getFullYear() - year;
  }
  