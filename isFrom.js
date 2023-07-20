export default
function isFrom(regNo, regLoc)
{
	if(regLoc.includes("CJ") || regLoc.includes("CA"))
    {
      return true;
    }
  	else
    {
      return false;
    }
}