describe('Test my countAllFromTown function', function() {
    it('should return number of all registration numbers from town', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
      assert.equal(fromStellies, 3);
  
      var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
      assert.equal(fromKuilsriver, 1);
    });
  });
  
  function countAllFromTown(regNumbers, town) {
    var regList = regNumbers.split(',');
    var count = 0;
    for (var i = 0; i < regList.length; i++) {
      if (regList[i].trim().startsWith(town)) {
        count++;
      }
    }
    return count;
  }