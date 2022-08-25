const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();





// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// fs.writeFile('index.html', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

const generateHTML = (response) =>  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    

    <p>Your name is ${response.name}</p>
    <p>Your location is ${response.location}</p>
    <p>Bio: ${response.bio}</p>
    <p>LinkedIn URL: ${response.linkedin}</p>
    <p>GitHub URL: ${response.github}</p>


</body>
</html>
`

// name, location, bio, LinkedIn URL, and GitHub URL.

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Write a short profile bio',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
    {
      type: 'list',
      message: 'What kind of license did you use?',
      name: 'license',
      choices: ['a', 'b', 'c', 'd']
    },
  ])
  .then((response) => {
   let html = generateHTML(response);

  fs.writeFile('index.html', html, (error) =>
  error ? console.error(error) : console.log(html)
  );

  fs.writeFile('readmes.md', html, (error) =>
  error ? console.error(error) : console.log(html)
  );
  });