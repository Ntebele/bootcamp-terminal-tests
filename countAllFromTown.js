export default function countAllFromTown(regNums, town) {
  
    var regNumsArray = regNums.split(",");
    
   var count = 0;
    
    for (var i = 0; i < regNumsArray.length; i++) {
      if (regNumsArray[i].trim().startsWith(town)) {
  
      count++;
     }
    }
    
     //Return the final count
    return count;
  }