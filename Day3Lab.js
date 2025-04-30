// Function Declaration
function calculateAreaDecl(width, height = 1) {
    return width * height;
  }
  
  // Arrow Function
  const calculateAreaArrow = (width, height = 1) => width * height;
  
  // Testing with different inputs
  console.log(`Area (5, 3): ${calculateAreaDecl(5, 3)}`);  // Output: 15
  console.log(`Area (5): ${calculateAreaDecl(5)}`);        // Output: 5
  console.log(`Area (7, 4): ${calculateAreaArrow(7, 4)}`);  // Output: 28
  console.log(`Area (10): ${calculateAreaArrow(10)}`);      // Output: 10
  

  // Global variable
const message = "Global greeting";

// Arrow function with default parameter and local variable
const sayHello = (name = "User") => {
  const message = "Hello from function";
  return `${message}, ${name}!`;
};

// Output
console.log(message);                  // Output: Global greeting
console.log(sayHello("Alice"));        // Output: Hello from function, Alice!
console.log(sayHello());               // Output: Hello from function, User!


for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
  
