export default
function isFromBellville(registration) 
{
  if (registration.startsWith('CY'))
{
      return true;
}
      else
{
      return false;
}
}
// console.log(isFromBellville('CY 330')) 