#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Wellcome Message
console.log("\n\tWellcome To \'CodeWithOsaf\' - CLI Simple Calculator\n");
// Asking Questions From Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }
]);
// Condtional statements If-Else
if (answers.Operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.Operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.Operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.Operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
