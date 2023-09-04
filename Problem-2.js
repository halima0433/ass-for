function matchFinder(string1, string2) {
  if (typeof string1 === 'string' && typeof string2 === 'string') {
    return string1.includes(string2);
  } else {
    return 'Sorry wrong information';
  }
}

let string1 = 'John Doe';
let string2 = 'ohn';
let result = matchFinder(string1, string2);
console.log(result); 