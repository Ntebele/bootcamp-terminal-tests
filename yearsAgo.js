function yearsAgo(year)
{
  var thisYear=new Date();
  var countYears=thisYear.getFullYear()-year;
  
  return countYears;
}
yearsAgo("2000")

export default yearsAgo;