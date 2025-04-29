const numbers = [12, -5, 20, 7, -3, 15, 8];

const analysis = {
  positiveCount: 0,
  evenSum: 0,
  maxNumber: numbers[0] // Initialize with first number
};

// Analyze the numbers
for (const number of numbers) {
  // Count positive numbers
  if (number > 0) {
    analysis.positiveCount++;
  }
  
  // Sum even numbers
  if (number % 2 === 0) {
    analysis.evenSum += number;
  }
  
  // Find maximum number
  if (number > analysis.maxNumber) {
    analysis.maxNumber = number;
  }
}

// Print the analysis using template literal
console.log(`Analysis Results:
Positive Numbers Count: ${analysis.positiveCount}
Sum of Even Numbers: ${analysis.evenSum}
Maximum Number: ${analysis.maxNumber}`);