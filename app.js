// add file system library
const fs = require('fs');

// get args from the command line
const profileDataArgs = process.argv.slice(2);
    //console.log(profileDataArgs);

// these are the const names of the args from the command line
const [name, github] = profileDataArgs;

// generate html as a string
const generatePage = (name, github) => {
    return `

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">GitHub</a></h2>
    </body>

    </html>
    `;
};

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