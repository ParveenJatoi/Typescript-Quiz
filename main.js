import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        name: "question1",
        type: "list",
        message: "Q1=What is TypeScript?",
        choices: ["A superset of JavaScript",
            "A framework for building web applications",
            "A backend programming language",
            "A database management system"]
    },
    {
        name: "question2",
        type: "list",
        message: "Q2=What extension do TypeScript files have?",
        choices: [".ts",
            ".js",
            ".txt",
            ".html"]
    },
    {
        name: "question3",
        type: "list",
        message: "Q3=Which of the following data types is NOT supported by TypeScript?",
        choices: ["Number",
            "String",
            "Boolean",
            "Undefined"]
    },
    {
        name: "question4",
        type: "list",
        message: "Q4=Which keyword is used to declare a variable with a fixed data type in TypeScript?",
        choices: ["var",
            "let",
            "const",
            "type"]
    },
    {
        name: "question5",
        type: "list",
        message: "Q5=What does 'TSConfig' file in TypeScript do?",
        choices: ["It defines the configuration settings for the TypeScript compiler",
            "It creates a new TypeScript project",
            "It configures the web server for serving TypeScript files",
            "It manages TypeScript package dependencies"]
    }
]);
let score = 0;
switch (quiz.question1) {
    case "A superset of JavaScript":
        console.log("1.correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question2) {
    case ".ts":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question3) {
    case "Undefined":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question4) {
    case "const":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question5) {
    case "It defines the configuration settings for the TypeScript compiler":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`Score ${score}`);
