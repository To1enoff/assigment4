function findLargestElement(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
  
  const numbers1 = [10, 5, 8, 2, 7];
  const largest = findLargestElement(numbers1);
  console.log("The largest element is:", largest);



//  HAS DUPLICATE METHOD
  function hasDuplicates(arr) {
    const seen = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        return true; 
      }
      seen.add(item);
    }
  
    return false; 
  }
  
  const numbers2 = [10, 5, 8, 2, 7, 10];
  const hasDuplicatesResult = hasDuplicates(numbers2);
  console.log("Array contains duplicates:", hasDuplicatesResult);

  

  // FIND LONGEST WORD
  function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  const sentence = "The quick brownEDD fox jumps over the lazy dog";
  const longest = findLongestWord(sentence);
  console.log("The longest word is:", longest);
  