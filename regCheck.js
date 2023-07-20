function regCheck(regNo,locIndicator)
{
  if(regNo.includes("GP")&&locIndicator.includes("GP")||regNo.includes("L")&&locIndicator.includes("L")||regNo.includes("EC")&&locIndicator.includes("EC")||regNo.includes("MP")&&locIndicator.includes("MP"))
  {
    return true;
  }
  else
  {
    return false;
  }
}
export default regCheck;