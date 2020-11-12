// saving pckg in const
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateReadMe = require("./generatereadme")
// import file here
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// creating my function ti get user's input

const questions = [

    {
        type: "input",
        message: "What is the Title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide table of contents",
        name: "contents",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installations",
    },
    {
        type: "input",
        message: "What is the explanation of usage?",
        name: "usage",
    },
    {
        type: "list",
        message: "Which license are you using?",
        name: "license",
        choices: ["MIT", "APACHE 2.0"]
    },
    {
        type: "input",
        message: "What is the contribution of the project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What are the tests of the project?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub User name?",
        name: "questOne",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "questTwo",
    },
]
async function init(){
    try {
      const answers = await inquirer.prompt(questions)  
      console.log("Generating Readme");
      console.log(answers);

      await writeFileAsync("Readme.md", generateReadMe(answers))
    } catch (error) {
        console.log(error)
    }
}
init();
// generating HTML with answers
// async function writeHTML() {

//     const answers = await getUserInput();
//     const { title, description, contents, installations, usage, license, contributing, tests, questOne, questTwo } = await getUserInput();
// }
// fs.writeFile("")