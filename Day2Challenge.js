//Task 1
const limit = 20;
const primes = [];

for (let number = 2; number <= limit; number++) {
  let isPrime = true;
  
  // Check divisibility up to square root of number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  
  if (isPrime) {
    primes.push(number);
  }
}

// Print primes using forEach and template literal
primes.forEach(prime => console.log(`Prime: ${prime}`));

//Task 2
const text = "Hello World";
const charCounts = {};

// Process each character
for (const char of text.toLowerCase()) {
  // Only count letters
  if (/[a-z]/.test(char)) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
}

// Print results with template literal and JSON.stringify for formatting
console.log(`Unique character counts: ${JSON.stringify(charCounts, null, 2)}`);

//Task 3
const rules = { 3: "Fizz", 5: "Buzz", 7: "Bang" };
 limit = 21;

// Create array from 1 to limit
const numbers = Array.from({ length: limit }, (_, i) => i + 1);

numbers.forEach(number => {
  let output = "";
  
  // Check each rule in ascending order
  Object.keys(rules)
    .sort((a, b) => a - b)
    .forEach(divisor => {
      if (number % divisor === 0) {
        output += rules[divisor];
      }
    });
  
  // If no rules matched, use the number
  console.log(`${number}: ${output || number}`);
});