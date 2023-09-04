function sortMaker(arr) {
    const [firstElement, secondElement] = arr;
  

    if (firstElement < 0 || secondElement < 0) {
      return "Invalid Input";
    }
  

    if (firstElement === secondElement) {
      return "equal";
    }
  
   
    if (secondElement > 0) {
      return [firstElement, secondElement].sort((a, b) => b - a);
    }
  }
  

  console.log(sortMaker([2,3])); 
  console.log(sortMaker([4,2])); 
  console.log(sortMaker([4,4])); 
  console.log(sortMaker([1,2])); 
  console.log(sortMaker([4,-2])); 
  
  