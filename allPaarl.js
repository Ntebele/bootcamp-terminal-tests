function allPaarl(regNo) {
    var regNo1 = regNo.split(', ');
    var paarl = [];
    //console.log(regNo1.length)
    for (var x = 0; x < regNo1.length; x++) {
      var filterReg = regNo1[x];
      //console.log(filterReg)
      if(filterReg.includes('CJ')) {
        paarl.push(filterReg);
      }
    }
    return paarl;
  }
  export default allPaarl;