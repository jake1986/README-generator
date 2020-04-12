function generateMarkdown(data) {
 return `
## Username
  * ${data.githubUsername}
## Email
  * ${data.userEmail}
## Title
  * ${data.title}
## Description
  * ${data.projectDescription}
## Install
  * ${data.appInstall}
## Table of Contents
  * ${data.tableOfContents}
## Usage
  * ${data.usage}
## License
  * ${data.badgeChoice}
## Contributions
  * ${data.contributing}
## Tests
  * ${data.tests}
## Questions
  * ${data.questions}
`
;
}

module.exports = generateMarkdown;
  