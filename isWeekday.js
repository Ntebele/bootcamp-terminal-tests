export default
function isWeekday(Weekday) {
    if (Weekday.startsWith('Sat') || Weekday.startsWith('Sun')) {
      return false;
    }
     else {
       return true;}
   }
   console.log(isWeekday('Sunday'))
   