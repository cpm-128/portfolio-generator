// add file system library
const fs = require('fs');

// receive the exported function
const generatePage = require('./src/page-template.js');

// get args from the command line
const profileDataArgs = process.argv.slice(2);
    //console.log(profileDataArgs);

// these are the const names of the args from the command line
const [name, github] = profileDataArgs;



// use module to actually generate an html file
// fs.writefile ( file name , data being written , callback function for errors/success )
fs.writeFile('index.html' , generatePage(name,github) , err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete. Check out index.html to see the output.');
});

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