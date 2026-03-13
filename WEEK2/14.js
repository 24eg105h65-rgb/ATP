const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


/*Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000  */

    // 1. filter() all credit transactions
let r1 = transactions.filter(element=>element.type==="credit");
console.log(r1);
// 2. map() to extract only transaction amounts
let r2 = transactions.map(element=>element.amount);
console.log(r2);
// 3. reduce() to calculate final account balance
let r3 = transactions.reduce((accumulator, element) => 
    { if (element.type === "credit") { return accumulator + element.amount;} 
    else { return accumulator - element.amount;}
    }, 0);
console.log(r3);
//4. find() the first debit transaction
let r4=transactions.find(element=>element.type==="debit");
console.log(r4);
//5. findIndex() of transaction with amount 10000
let r5= transactions.findIndex(element=>element.amount===10000);
console.log(r5);
