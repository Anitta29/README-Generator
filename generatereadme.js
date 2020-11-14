// make function to check if there's license
function checkLicense(license) {
    // if we do not have a lic skip if we do return the license
    if (license === "No License") {
        return  {name: "No License"}
    }
    if (license === "MIT") {
        return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license === "APACHE 2.0") {
        return  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }

}

// make a function to render the readME
function generateReadMe(data) {
    
    return `# ${data.title};
   
    ## Description 
    ${data.description};
    ---
    ## Table of Contents


* [Installation](#installations)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributing)
* [Tests](#tests)
* [Questions](#questions)

---

## Intallations
Download tha app and run....
${data.installations};

---

## Usage

${data.usage}

---

## License

${data.license}
${checkLicense(data.license)}

---

## Contribution

${data.contributing}

---

## Tests

${data.tests}

---

## Questions
If you have any question ${data.questOne}
${data.questTwo}
`

}



// always at the end of code
module.exports = generateReadMe;
