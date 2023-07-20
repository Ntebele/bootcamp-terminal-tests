export default
function isFromCapeTown(registration)
{
  if (registration.startsWith('CA')) {
    return true;
  }
  else {
    return false;
  }
}