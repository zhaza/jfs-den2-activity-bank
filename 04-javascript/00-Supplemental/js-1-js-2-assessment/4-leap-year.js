function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

console.log(isLeapYear(1000));
console.log(isLeapYear(1100));
console.log(isLeapYear(1200));
console.log(isLeapYear(1300));
console.log(isLeapYear(1400));
console.log(isLeapYear(1500));
console.log(isLeapYear(1600));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(1804));
console.log(isLeapYear(1808));
console.log(isLeapYear(1812));
console.log(isLeapYear(1816));
console.log(isLeapYear(1820));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
