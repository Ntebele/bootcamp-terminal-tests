export default
function regCheck(regNo, regLoc) 
{
  if (regNo.includes("GP")&&regLoc.includes("GP") || regNo.includes("EC")&&regLoc.includes("EC") ||regNo.includes("MP")&&regLoc.includes("MP") ||regNo.includes("L")&&regLoc.includes("L"))
  {
    return true;
  }
  
 else 
 {
   return false;
}
}