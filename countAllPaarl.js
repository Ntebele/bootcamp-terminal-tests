export default
function countAllPaarl(regNumString) {
    const regNums = regNumString.split(','); 
    let count = 0; 
    for (let i = 0; i < regNums.length; i++) {
      const regNum = regNums[i].trim(); 
      if (regNum.startsWith('CJ')) { 
        count++; 
      }
    }
    return count; 
  }