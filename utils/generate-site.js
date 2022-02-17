const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an err, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// If code is executed it would look like below:

// // demo HTML code
// const sampleHtml = '<h1>This will be written to the file!</h1>';

// writeFile(sampleHtml)
//   .then(successfulResponse => {
//     // this will run when we use `resolve()`
//     console.log(successfulResponse);
//   })
//   .catch(errorResponse => {
//     // this will run when we use `reject()`
//     console.log(errorResponse);
//   });

// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };
// using shorthand property names to do the same as listing name of function as method name: method value below:

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };