import mostProfitableDepartment from "../mostProfitableDepartment";
import assert from "assert"

describe('Test my mostProfitableDepartment function', function() {
    it('should return most profitable department, and the most profitable day of the week', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      var salesData = [
        { department: 'hardware', sales: 4500, day: 'Monday' },
        { department: 'outdoor', sales: 1500, day: 'Monday' },
        { department: 'carpentry', sales: 5500, day: 'Monday' },
        { department: 'hardware', sales: 7500, day: 'Tuesday' },
        { department: 'outdoor', sales: 2505, day: 'Tuesday' },
        { department: 'carpentry', sales: 1540, day: 'Tuesday' },
        { department: 'hardware', sales: 1500, day: 'Wednesday' },
        { department: 'outdoor', sales: 8507, day: 'Wednesday' },
        { department: 'carpentry', sales: 8009, day: 'Wednesday' },
        { department: 'hardware', sales: 12000, day: 'Thursday' },
        { department: 'outdoor', sales: 18007, day: 'Thursday' },
        { department: 'carpentry', sales: 6109, day: 'Thursday' },
        { department: 'hardware', sales: 7005, day: 'Friday' },
        { department: 'outdoor', sales: 12006, day: 'Friday' },
        { department: 'carpentry', sales: 16109, day: 'Friday' },
      ];
  
      var salesData2 = [
        { department: 'electronics', sales: 4500, day: 'Monday' },
        { department: 'outdoor', sales: 1500, day: 'Monday' },
        { department: 'carpentry', sales: 5500, day: 'Monday' },
        { department: 'steelwork', sales: 7500, day: 'Tuesday' },
        { department: 'outdoor', sales: 2505, day: 'Tuesday' },
        { department: 'carpentry', sales: 1540, day: 'Tuesday' },
        { department: 'hardware', sales: 1500, day: 'Wednesday' },
        { department: 'outdoor', sales: 8507, day: 'Wednesday' },
        { department: 'carpentry', sales: 8009, day: 'Wednesday' },
        { department: 'hardware', sales: 12000, day: 'Thursday' },
        { department: 'carpentry', sales: 6109, day: 'Thursday' },
        { department: 'hardware', sales: 7005, day: 'Friday' },
        { department: 'electronics', sales: 12006, day: 'Friday' },
        { department: 'electronics', sales: 16109, day: 'Wednesday' },
        { department: 'steelwork', sales: 7500, day: 'Tuesday' },
        { department: 'outdoor', sales: 2505, day: 'Tuesday' },
        { department: 'carpentry', sales: 1540, day: 'Tuesday' },
        { department: 'steelwork', sales: 1500, day: 'Wednesday' },
        { department: 'carpentry', sales: 8009, day: 'Wednesday' },
      ];
  
      assert.equal(
        'outdoor',
        mostProfitableDepartment(salesData),
        "Most profitable department is 'outdoor' for dataset 1"
      );
      assert.equal(
        'electronics',
        mostProfitableDepartment(salesData2),
        "Most profitable department is 'electronics' for dataset 2"
      );
  
      assert.equal(
        'Thursday',
        mostProfitableDay(salesData),
        "Most profitable day is 'Thursday' for dataset 1"
      );
      assert.equal(
        'Wednesday',
        mostProfitableDay(salesData2),
        "Most profitable day is 'Wednesday' for dataset 2"
      );
    });
  });
  
  function mostProfitableDepartment(salesData) {
    let maxProfit = 0;
    let mostProfitableDept = '';
  
    for (let i = 0; i < salesData.length; i++) {
      if (salesData[i].sales > maxProfit) {
        maxProfit = salesData[i].sales;
        mostProfitableDept = salesData[i].department;
      }
    }
  
    return mostProfitableDept;
  }
  
  function mostProfitableDay(salesData) {
    let maxProfit = 0;
    let mostProfitableDay = '';
  
    for (let i = 0; i < salesData.length; i++) {
      if (salesData[i].sales > maxProfit) {
        maxProfit = salesData[i].sales;
        mostProfitableDay = salesData[i].day;
      }
    }
  
    return mostProfitableDay;
  }