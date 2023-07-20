export default
function yearsAgo(years) {
    const date = new Date();
    var pastyears = date.getFullYear()-years;
    return pastyears;
  }
  yearsAgo('2020');
  