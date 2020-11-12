// make function to render the license
function checkLicense(license) {
    // if we do not have a lic skip if we do return the license
}
//  make function to render the license link

// make a function to render the license

// make a function to render the readME
function generateReadMe(data){
    return `# ${data.title};
    ## Description 
    ${data.description};
    ---
    ## Table of Contents


* [Installation](#installation)
* [Usage](#usage)

---

## Intallations
Download tha app and run....
${data.installations};
`}
    
    
    module.exports = generateReadMe;
// last at botem export th