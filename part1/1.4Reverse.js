function reverseString(inputString) {
    if (typeof inputString !== 'string') {
      return 'Input is not a valid string.';
    }
  
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
  
    return reversedString;
  }
  
  // Example usage:
  const originalString = 'Hello, World!';
  const reversed = reverseString(originalString);
  console.log(reversed);
  