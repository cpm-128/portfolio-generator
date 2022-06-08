// add inquirer module
const inquirer = require('inquirer');

// // add file system library
// const fs = require('fs');

// // receive the exported function
// const generatePage = require('./src/page-template.js');

// inquirer questions and answers
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself.'
        }

    ])
};

const promptProject = () => {
    // backticks allow for carriage returns
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all the apply)',
            choices: ['JavaScript' , 'HTML' , 'CSS' , 'ES6' , 'jQuery' , 'Bootstrap' , 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
};

// use .then functions to control the application's flow
promptUser()
    .then(answers => console.log(">>> about user" , answers))
    .then(promptProject)
    .then(projectAnswers => console.log(">>> about project" , projectAnswers));
    // how did projectAnswers get defined here??

// // populate html text
// const pageHTML = generatePage(name, github);

// // use module to actually generate an html file
// // fs.writefile ( file name , data being written , callback function for errors/success )
// fs.writeFile('./index.html' , pageHTML , err => {
//     if (err) throw err;

//     console.log('Portfolio complete. Check out index.html to see the output.');
// });

// =========

// const printProfileData = profileDataArr => {

//     // THIS....
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('=========')

//     // IS THE SAME AS THIS....
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);