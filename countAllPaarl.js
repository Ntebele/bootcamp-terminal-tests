function countAllPaarl(regNo)
{
  let splitReg=regNo.split(',');
  //initialize the count
  var count=0
  for(var b=0;b<splitReg.length;b++)
  {
    var filterList=splitReg[b];
    if(filterList.includes("CJ"))
    {
      count=count+1;
    }
  }
  return count;
}
export default countAllPaarl;