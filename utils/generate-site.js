// all fs functionality used to create the output file

const fs = require('fs');

// write a file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html' , fileContent , err => {
            // if there is an error, rejust the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject (err);
                // return out of the function to make sure the Promise does not execute the resolve function as well
                return;
            }

            // if success, resolve the Promise and send the successful data tothe .then() method
            resolve({
                ok: true,
                message: 'File created.'
            });
        })
    });
};

// copy a file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css' , './dist/style.css' , err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet copied.'
            });
        });
    });
};

// export the funtions
module.exports = { writeFile, copyFile };