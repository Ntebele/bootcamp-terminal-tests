import totalPhoneBill from "../totalPhoneBill";
import assert from "assert"

describe('Test my totalPhoneBill function', function() {
    it('should calculate the total bill for the data provided', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
      assert.equal('R3.40', totalPhoneBill('call, sms'));
      assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
  });
  
  function totalPhoneBill(itemList) {
    var items = itemList.split(', ');
    var totalCost = 0;
  
    for (var i = 0; i < items.length; i++) {
      var item = items[i].toLowerCase();
  
      if (item === 'call') {
        totalCost += 2.75;
      } else if (item === 'sms') {
        totalCost += 0.65;
      }
    }
  
    return 'R' + totalCost.toFixed(2);
  }