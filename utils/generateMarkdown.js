function generateMarkdown(data) {
  return `
##${data.userEmail}
##${data.githubUsername}
##${data.projectTitle}
##${data.testRuns}
##${data.appUsage}
##${data.testRuns}
##${data.tableOfContents}
##${data.projectDescription}
##${data.devContributions}
##${data.reportIssues}
##${data.appInstall}
##${data.appInfo}
## ${data.badgeChoice}
`
;
}

module.exports = generateMarkdown;
  