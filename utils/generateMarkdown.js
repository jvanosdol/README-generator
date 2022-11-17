function generateMarkdown(data) {



  return `
  
  ## Project Title:

  ${data.title}

  
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

  ## License 

 License: ${data.license}


  ## Installation

  ${data.installation}


  ## Credits

  ${data.credits}


  ## How to Contribute

  ${data.contribute}


  ## Contact

  GitHub username: ${data.username}\n
  GitHub URL: ${data.githubURL}\n
  Email: ${data.email}\n


`;
}



module.exports = generateMarkdown;
