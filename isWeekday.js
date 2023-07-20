function isWeekday(checkDay)
{
  if(checkDay.startsWith("Sat")||checkDay.startsWith("Sun"))
  {
    return false;
  }
  else
  {
    return true;
  }
}

export default isWeekday;
