describe('Test my countAllPaarl function', function() {
    it('returns the number of registration numbers in the string for Paarl', function() {
      assert.equal(2, 2);
      assert.deepEqual([2, 2], [2, 2]);
  
      assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
      assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
  });
  
  function countAllPaarl(regNumbers) {
    var regList = regNumbers.split(',');
    var count = 0;
    
    for (var i = 0; i < regList.length; i++) {
      if (regList[i].trim().startsWith('CJ')) {
        count++;
      }
    }
    
    return count;
  }
  