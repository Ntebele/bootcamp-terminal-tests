import assert from "assert";
import isWeekday from "../isWeekday.js";


describe('The isWeekday function', function()
{
    it('if the day of the week starts with "sat" or "sun" should return false else return true', function()
    {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    })
    
});

