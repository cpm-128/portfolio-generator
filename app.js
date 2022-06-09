// add inquirer module
const inquirer = require('inquirer');

// add file system library
const fs = require('fs');

// receive the exported function
const generatePage = require('./src/page-template.js');

// inquirer questions and answers
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            // validate there is an input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself.',
            // the when property means this question will only be asked WHEN...
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    ])
};

const promptProject = portfolioData => {
    // add an array called portfolioData to store multiple project objects
    // if there are no 'projects' in array, create an array
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

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
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue.');
                    return false;
                }
            }
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
            message: 'Enter the GitHub link to your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue.');
                    return false;
                }
            }
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
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

// use .then functions to control the application's flow
promptUser()
    //.then(answers => console.log(">>> about user" , answers))
    .then(promptProject)
    .then(portfolioData => {
        //console.log(">>> portfolio data" , portfolioData)

        const pageHTML = generatePage(portfolioData);

        fs.writeFile('./indexhtml' , pageHTML , err => {
            if (err) throw new Error(err);

            console.log('Portfolio created. Check out index.html in this directory to see it.');
        });
    });
    // how did projectAnswers get defined here??