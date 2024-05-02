#! /usr/bin/env node 
//shadam
import inquirer from "inquirer";
import chalk from "chalk";
import mul from "./mul.js";
import add from "./add.js";
import div from "./div.js";
import sub from "./subtract.js";



async function main() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "q1",
      message: "Enter Your First Number",
    },
    {
      type: "input",
      name: "q2",
      message: "Enter Your Second Number",
    },
    {
      type: "input",
      name: "q3",
      message: "Enter Your Third Number",
    },
    {
      type: "list",
      name: "Operation",
      message: "Choose One Operation",
      choices: [
        {
          name: "Addition",
          value: add,
        },
        {
          name: "Subtraction",
          value: sub,
        },
        {
          name: "Multiplication",
          value: mul,
        },
        {
          name: "Divide",
          value: div,
        },
      ],
    },
  ]);
  console.log("\n_____________________________________________");
//  if(answer.Operation === add){
//     console.log(answer.Operation(answer.q1,answer.q2,answer.q3))
//  }
    console.log(
      chalk.bgCyan.whiteBright.bold(
        `The Answer is = ${answer.Operation(answer.q1, answer.q2, answer.q3)}`
      )
    );
  console.log("_____________________________________________");
}
main();
