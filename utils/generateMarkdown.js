function generateMarkdown(data) {
 var myBadge;
 var badgeHTTP = `https://img.shields.io/badge/License-${data.badgeChoice}-yellow.svg)](https://opensource.org/licenses/MIT)`;
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
## Badge
  * ${badgeHTTP}
`
;
}

module.exports = generateMarkdown;
  