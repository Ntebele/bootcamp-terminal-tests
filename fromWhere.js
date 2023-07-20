function fromWhere(regNo)
{
  switch(regNo)
      {
    case 'CY 567489':
      return 'Bellville';
    case 'CJ 343502':
      return 'Paarl';
    case 'CA 987504':
      return 'Cape Town';
    case 'ZN 568593':
      return 'Some other place!';
  	  }  
}
export default fromWhere;