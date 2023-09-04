function findAddress(obj) {
    
    const street = obj.street !== undefined ? obj.street : '__';
    const house = obj.house !== undefined ? obj.house : '__';
    const society = obj.society !== undefined ? obj.society : '__';
  
    
    return `${street},${house},${society}`;
  }
  
  
  const address1 = { street: 10, house: '15A', society: 'Earth Perfect' };
  const address2 = { street: 10, society: 'Earth Perfect' };
  const address3 = { street: 10 };
  
  console.log(findAddress(address1)); 
  console.log(findAddress(address2)); 
  console.log(findAddress(address3)); 