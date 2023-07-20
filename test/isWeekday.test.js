import isWeekday from "../isWeekday";
import assert from "assert"

describe('Test my isWeekday function', function() {
    it('it should return true if parameter is a weekday, else return false', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(isWeekday('Saturday'), false);
      assert.equal(isWeekday('Sunday'), false);
      assert.equal(isWeekday('Monday'), true);
      assert.equal(isWeekday('Tuesday'), true);
      assert.equal(isWeekday('Wednesday'), true);
      assert.equal(isWeekday('Thursday'), true);
      assert.equal(isWeekday('Friday'), true);
    });
  });