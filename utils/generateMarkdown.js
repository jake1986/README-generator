function generateMarkdown(data) {
  const gitTitle = "Title"
  const gitUserName = "Username"
  const gitEmail = "User Email"
  const gitDescription = "Description"
  const gitInstall = "Install"
  const gitContents = "Table of Contents"
  const gitUsage = "Usage";
  const gitLicense = "License"
  const gitContributing = "Contributing"
  const gitQuestions = "Questions"
  return `

##${gitUserName}
##${data.githubUsername}
##${gitEmail}
##${data.userEmail}
##${gitTitle}
##${data.title}
##${gitDescription}
##${data.projectDescription}
##${gitInstall}
##${data.appInstall}
##${gitContents}
##${data.tableOfContents}
##${gitUsage}
##${data.usage}
##${gitLicense}
##${data.badgeChoice}
##${gitContributing}
##${data.contributing}
##${gitQuestions}
##${data.questions}
`
;
}

module.exports = generateMarkdown;
  