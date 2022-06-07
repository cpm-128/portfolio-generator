const profileDataArgs = process.argv.slice(2, process.argv.length);
    //console.log(profileDataArgs);

const [name, github] = profileDataArgs;

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

console.log(name, github);
console.log(generatePage(name , github));

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