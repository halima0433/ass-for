function canPay(changeArray, chipPrice) {
    
    if (changeArray.length === 0) {
      return false;
    }
  
   
    const totalChange = changeArray.reduce((sum, note) => sum + note, 0);
  
  
    if (totalChange >= chipPrice) {
      return true;
    } else {
      return false;
    }
  }
  

  const changeArray1 = [1, 2, 5];
  const chipPrice1 = 10;
  console.log(canPay(changeArray1, chipPrice1)); 
  
  const changeArray2 = [1, 5, 5];
  const chipPrice2 = 10;
  console.log(canPay(changeArray2, chipPrice2)); 
  
  const emptyArray = [];
  const chipPrice3 = 5;
  console.log(canPay(emptyArray, chipPrice3)); 
  