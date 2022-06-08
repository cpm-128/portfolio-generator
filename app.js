// add inquirer module
const inquirer = require('inquirer');

// // add file system library
// const fs = require('fs');

// // receive the exported function
// const generatePage = require('./src/page-template.js');

// inquirer questions and answers
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(">>> " , answers));

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