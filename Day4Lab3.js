// Declare two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge arrays using spread
const combined = [...arr1, ...arr2];

// Use reduce to calculate the product of all numbers in combined
const product = combined.reduce((acc, val) => acc * val, 1);

// Create an object with combined and product
const stats = {
  combined,
  product
};

// Print stats using template literals
console.log(`Stats: ${JSON.stringify(stats, null, 2)}`);
