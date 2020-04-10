const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
       type: "input",
       name: "githubUsername",
       message: "What is your Github username?"

    },

    {
        type: "input",
        name: "appInfo",
        message: "What is the name of your app?"
 
     },

     {
        type: "input",
        name: "appInstall",
        message: "How do you install the app?"
 
     },

     {
        type: "input",
        name: "reportIssues",
        message: "How can you report issues?"
 
     },

     {
        type: "input",
        name: "devContributions",
        message: "How can other developers contribute to the app?"
 
     },

     {
      type: "checkbox",
      name: "badgeChoice",
      message: "Which license would you like?",
      choices: [
         "ISC",
         "MIT"
      ]

   },


   {
      type: "input",
      name: "projectTitle",
      message: "What's the title of your project?"

   },

];

function createBadge(license) {
   return `https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
}

function combineData(){
return `${data.badgeChoice}
${data.projectTitle}
`

}

// take return from combineData and put it into generateMarkdown.js, also make sure to write all prompts for questions in index.js, e.g. title, questions, etc.
function writeToFile(fileName, data) {
   return fs.writeFileSyn(path.join(__dirname,filename),data)
}

console.log(__dirname)

function init() {
    inquirer.prompt(questions).then(function(data) {
        api.getUser(data.githubUsername).then(response => {
            console.log(response.data.avatar_url);
            console.log(createBadge(data.badgeChoice));
            writeToFile("README.md",generateMarkdown(data));
        });
    });
}

init();