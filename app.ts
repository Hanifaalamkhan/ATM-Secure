#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollars
let myPin = 5678;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number?",
    type: "number",
  },
]);
// 5678   ===    567 - false
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select the option",
      type: "list",
      choices: ["withdraw","check balance" , "fast cash", "deposit" ],
    },
  ]);
  console.log(operationAns);

  //-----------------------------withdraw----------------------------------

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]
    );
    myBalance -= amountAns.amount;
    console.log("my remaining balance is: " + myBalance);

    // --------------------------check balance------------------------------

  } else if (operationAns.operation === "check balance") {
    console.log("your balance is :" + myBalance);
  }
  //----------------------------------FAST CASH-----------------------------------
  else if (operationAns.operation === "fast cash") {
    let fastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: [1000, 3000, 5000, 10000, 15000]

      }
    ]
    )
    if (fastcashAns.amount <= myBalance) {
      let balance2 = myBalance - fastcashAns.amount;
      console.log(`The remaining balance is ${balance2}`)
    }
    else {
      console.log('you have insufficient amount');
    }
  }

  //------------------------------deposite-----------------------
  else if (operationAns.operation === "deposit") {
    let amountAns = await inquirer.prompt([
      {
        name: "deposit_amount",
        message: "please enter your amount :",
        type: "number",
      }
    ]
    );
   
    console.log("Entered deposit amount: ", amountAns.deposit_amount); // Debugging line
    if (amountAns.deposit_amount > 0) {
      myBalance += amountAns.deposit_amount;
      console.log(`The new balance is ${myBalance}`);
    } else {
      console.log("Invalid deposit amount");


  };
  }

}
else {
  console.log("Incorrect pin number")
};
