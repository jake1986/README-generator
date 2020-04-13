function generateMarkdown(data) {
var repoName = "README-generator";
var badgeHTTPOne = `[![License: ${data.badgeChoice}](https://img.shields.io/badge/License-${data.badgeChoice}-blue.svg)](https://opensource.org/licenses/${data.badgeChoice})`;
var badgeHTTP = `
 https://img.shields.io/github/license/${data.githubUsername}/${repoName}`;
  return `
 ${badgeHTTPOne}
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
  