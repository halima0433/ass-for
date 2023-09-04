function cubeNumber(number) {
    if (typeof number === 'number') {
      let result = number * number * number;
      return result;
    } else {
      return "Sorry wrong information";
    }
  }
  
  const output = cubeNumber(4);
  console.log(output); 
  

  