// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## Project Title:

  #${data.title}

  
  ## Author:
  
  ${data.name}


  ## Table of Contents

- [Description](#description)
- [Built With](#builtwith)
- [Installation](#installation)
- [Credits](#credits)
- [How To Contribute](#how-to-contribute)
- [Contact](#contact)


  ## Description:

  ${data.description}


  ## Built With

  ${data.builtWith}


  ## Installation

  ${data.installation}


  ## Credits

  ${data.credits}


  ## How to Contribute

  ${data.contribute}


  ## Contact

  GitHub username: ${data.username}
  GitHub URL: ${data.githubURL}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
