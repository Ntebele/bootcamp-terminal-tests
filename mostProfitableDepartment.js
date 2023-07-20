export default mostProfitableDepartment;
const salesData = [
    { department: "Clothing", day: "Monday", sales: 1000 },
    { department: "Clothing", day: "Tuesday", sales: 1200 },
    { department: "Clothing", day: "Wednesday", sales: 1500 },
    { department: "Clothing", day: "Thursday", sales: 1300 },
    { department: "Clothing", day: "Friday", sales: 2000 },
    { department: "Electronics", day: "Monday", sales: 800 },
    { department: "Electronics", day: "Tuesday", sales: 900 },
    { department: "Electronics", day: "Wednesday", sales: 1000 },
    { department: "Electronics", day: "Thursday", sales: 1100 },
    { department: "Electronics", day: "Friday", sales: 1200 },
    { department: "Grocery", day: "Monday", sales: 500 },
    { department: "Grocery", day: "Tuesday", sales: 600 },
    { department: "Grocery", day: "Wednesday", sales: 700 },
    { department: "Grocery", day: "Thursday", sales: 800 },
    { department: "Grocery", day: "Friday", sales: 900 },
  ];
  
  
  function mostProfitableDepartment(salesData) {
    const departmentSales = {};
  
    
    for (let i = 0; i < salesData.length; i++) {
      const department = salesData[i].department;
      const sales = salesData[i].sales;
  
      if (!departmentSales[department]) {
        departmentSales[department] = sales;
      } else {
        departmentSales[department] += sales;
      }
    }
  
    
    let mostProfitable = "";
    let highestSales = 0;
  
    for (const department in departmentSales) {
      if (departmentSales[department] > highestSales) {
        mostProfitable = department;
        highestSales = departmentSales[department];
      }
    }
  
    return mostProfitable;
  }
  
  function mostProfitableDay(salesData) {
    const daySales = {};
  
   
    for (let i = 0; i < salesData.length; i++) {
      const day = salesData[i].day;
      const sales = salesData[i].sales;
  
      if (!daySales[day]) {
        daySales[day] = sales;
      } else {
        daySales[day] += sales;
      }
    }
  
    let mostProfitable = "";
    let highestSales = 0;
  
    for (const day in daySales) {
      if (daySales[day] > highestSales) {
        mostProfitable = day;
        highestSales = daySales[day];
      }
    }
  
    return mostProfitable;
  }
  
  console.log(mostProfitableDepartment(salesData)); // Expected output: "Clothing"
  console.log(mostProfitableDay(salesData)); // Expected output: "Friday"