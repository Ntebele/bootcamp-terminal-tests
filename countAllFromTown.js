function countAllFromTown(regNo,code)
{
  let list=regNo.split(',');
  var count=0;
  for(let item of list)
  {
    if(item.includes(code))
    {
      count++;
    }
  }
  return count;
  //return count2;
}

export default countAllFromTown;