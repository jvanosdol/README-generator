const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [


{
  type: 'input',
  message: 'What is the project title?',
  name: 'title',
},
{
  type: 'input',
  message: 'What is your name?',
  name: 'name',
},
{
  type: 'input',
  message: 'Enter a description of the project.',
  name: 'description',
},
{
  type: 'input',
  message: 'What did you use in order to build this app?',
  name: 'builtWith',
},
{
  type: 'input',
  message: 'What do you need to install in order to run this app?',
  name: 'installation',
},
{
  type: 'input',
  message: 'What resources did you find useful in building this app?',
  name: 'credits',
},
{
  type: 'input',
  message: 'If someone is interested in contributing to this project, how can they do so?',
  name: 'contribute',
},
{
  type: 'input',
  message: 'What is your GitHub username??',
  name: 'username',
},
{
  type: 'input',
  message: 'What is your GitHub URL?',
  name: 'githubURL',
},
{
  type: 'input',
  message: 'What is your email?',
  name: 'email',
},
{
  type: 'list',
  message: 'What kind of license did you use?',
  name: 'license',
  choices: ['a', 'b', 'c', 'd']
}
];

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
    <p>License: ${response.license}</p>

    <p>##License: ${response.license}</p>


</body>
</html>
`



// name, location, bio, LinkedIn URL, and GitHub URL.

inquirer
  .prompt(questions)

  
  .then((data) => {
   //let html = generateHTML(response);
   const response = generateMarkdown(data);
   


    fs.writeFile('./output/README.md', response, (error) =>
    error ? console.error(error) : console.log(response)
    );
  }
);
