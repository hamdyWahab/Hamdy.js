//If statement
let score = 88;

let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Score ${score} earns grade: ${grade}`);

// 2 For Loo with Arrays
// Declare the array
let numbers = [10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        console.log(numbers[i]);
    }
}

// 3 While loop Countdown

let count = 10;
console.log("Countdown using while loop:");
while (count >= 1) {
    console.log(count);
    if (count === 5) {
        console.log("Stopped early!");
        break; 
    }
    count--;
}






