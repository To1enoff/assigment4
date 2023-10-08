function arrayOperations(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return {
        sum: 0,
        average: NaN,
        max: NaN,
        min: NaN
      };
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
  
    return {
      sum: sum,
      average: average,
      max: max,
      min: min
    };
  }
  
  // Example usage:
  const numbers = [10, 5, 8, 2, 7];
  const result = arrayOperations(numbers);
  
  console.log("Sum:", result.sum);
  console.log("Average:", result.average);
  console.log("Maximum:", result.max);
  console.log("Minimum:", result.min);
  