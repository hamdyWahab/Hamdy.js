let income = 1000,
rent=400,
grocies=150,
savingsRate = 0.2,
expenses =(rent+grocies),
remainingIncome =(income-expenses),
savings=(remainingIncome*savingsRate),
finalBalance =(remainingIncome-savings)
const budget ={
    totalexpenditure:expenses,
    remaining:remainingIncome,
    savings:savings,
    balance:finalBalance
}

console.log("Total Expenses: $" + budget.totalexpenditure);
console.log("Remaining Income: $" + budget.remaining);
console.log("Savings: $" +budget.savings);
console.log("Final Balance: $" + budget.balance);
//Testing income and expenses with different values
income=2000;
expenses=((rent=600) + (grocies=200));
remainingIncome =(income-expenses),
savings=(remainingIncome*savingsRate),
finalBalance =(remainingIncome-savings)
console.log("Total Expenses: $" + expenses);
console.log("Remaining Income: $" + remainingIncome);
console.log("Savings: $" +savings);
console.log("Final Balance: $" +finalBalance);

