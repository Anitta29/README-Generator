// make function to render the license
function checkLicense(license) {
    // if we do not have a lic skip if we do return the license
}
//  make function to render the license link

// make a function to render the license

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
* [Questions](#questOne, #questTwo)

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

---

## Contribution

${data.contributing}

---

## Tests

${data.tests}

---

## Questions

${data.questOne}
${data.questTwo}
`}



// always at the end of code
module.exports = generateReadMe;
