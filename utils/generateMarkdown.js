function generateMarkdown(data) {
var repoName = "README-generator";
var bashHTTPOne = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
var badgeHTTP = `
 https://img.shields.io/github/license/${data.githubUsername}/${repoName}`;
  return `
 ${bashHTTPOne}
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
  