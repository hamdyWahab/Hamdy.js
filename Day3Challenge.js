//Task 1
// Function that returns a memoized factorial calculator
function createFactorial() {
    const cache = {};
  
    return (n) => {
      if (!Number.isInteger(n) || n < 0) {
        return "Invalid input";
      }
  
      if (cache[n]) {
        return cache[n];
      }
  
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
  
      cache[n] = result;
      return result;
    };
  }
  
  // Using the memoized factorial function
  const factorial = createFactorial();
  
  console.log(`Factorial(3): ${factorial(3)}`);    // 6
  console.log(`Factorial(5): ${factorial(5)}`);    // 120
  console.log(`Factorial(3): ${factorial(3)}`);    // Cached: 6
  console.log(`Factorial(-1): ${factorial(-1)}`);  // Invalid input
  

// Task 2
  // String formatter using ES6 and default parameters
const formatString = (str, options = { uppercase: false, reverse: false, trim: false }) => {
    if (typeof str !== "string") {
      return "Invalid input";
    }
  
    let formatted = str;
  
    if (options.trim) {
      formatted = formatted.trim();
    }
  
    if (options.uppercase) {
      formatted = formatted.toUpperCase();
    }
  
    if (options.reverse) {
      formatted = [...formatted].reverse().join('');
    }
  
    return `Formatted: "${formatted}"`;
  };
  
  // Examples
  console.log(formatString(" hello ", { trim: true, uppercase: true })); // "HELLO"
  console.log(formatString("World", { reverse: true }));                 // "dlroW"
  console.log(formatString(12345, { uppercase: true }));                 // "Invalid input"


// Task 3
  // Factory function to create dynamic filters with call count tracking
function createFilter(condition) {
  let callCount = 0;

  // Validate the condition string
  const validConditions = ["even", "odd", "positive"];
  if (!validConditions.includes(condition)) {
    return () => "Invalid input";
  }

  // Return the filtering function
  return (arr) => {
    if (!Array.isArray(arr)) {
      return "Invalid input";
    }

    callCount++;

    let filtered = [];

    if (condition === "even") {
      filtered = arr.filter(num => num % 2 === 0);
    } else if (condition === "odd") {
      filtered = arr.filter(num => num % 2 !== 0);
    } else if (condition === "positive") {
      filtered = arr.filter(num => num > 0);
    }

    console.log(`Call ${callCount}:`, filtered);
    return { filtered, callCount };
  };
}

// Examples
const evenFilter = createFilter("even");
evenFilter([1, 2, 3, 4]);      // Call 1: [2, 4]
evenFilter([6, 7, 8, 10]);     // Call 2: [6, 8, 10]

const invalidFilter = createFilter("prime");
console.log(invalidFilter([2, 3, 5]));  // Invalid input
