function isFromBellville(registrationNo)
{
  if(registrationNo.startsWith("CY"))
  {
    return true
  }
  else
  {
    return false;
  }
}


export default isFromBellville;