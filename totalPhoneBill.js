function totalPhoneBill(billCost)
{
  let splitBill=billCost.split(',');
  var totalCost=0;
  for(var t=0;t<splitBill.length;t++)
  {
    var bill=splitBill[t];
    if(bill.trim()=='sms')
    {
      totalCost+=0.65;
    }
    else if(bill.trim()=='call')
    {
      totalCost+=2.75;
    }
  }
  return "R"+totalCost.toFixed(2);
}

export default totalPhoneBill;