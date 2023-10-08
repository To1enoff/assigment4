function dateDifference(date1, date2) {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = 60 * millisecondsInSecond;
    const millisecondsInHour = 60 * millisecondsInMinute;
    const millisecondsInDay = 24 * millisecondsInHour;
  
    const days = Math.floor(diffInMilliseconds / millisecondsInDay);
    const hours = Math.floor((diffInMilliseconds % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((diffInMilliseconds % millisecondsInHour) / millisecondsInMinute);
    const seconds = Math.floor((diffInMilliseconds % millisecondsInMinute) / millisecondsInSecond);
  
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-01-04');
  const difference = dateDifference(startDate, endDate);
  console.log(difference);
  function formatDate(date, format) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    return date.toLocaleDateString(undefined, options);
  }
  
  // Example usage:
  const currentDate = new Date();
  console.log(formatDate(currentDate, 'short')); // Formats as "1/1/2023, 12:00 AM"
  function addDaysToDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  // Example usage:
  const originalDate = new Date('2023-01-01');
  const newDate = addDaysToDate(originalDate, 7);
  console.log(newDate); // Adds 7 days to the original date
      