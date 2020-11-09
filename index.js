const inquirer = require("inquirer");
const fs = require("fs");

async function getUserInput() {
    const questions = await inquirer.prompt([
        
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
            message: "What is the table of contents",
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
            type: "input",
            message: "What is the license",
            name: "license",
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






    ])






}