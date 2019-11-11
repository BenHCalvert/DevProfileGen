// Require File System 
var fs = require("fs");
// Require Inquirer
var inquirer = require("inquirer");
// Require Axios
const axios = require("axios");
// require html file
const htmlProfile = require("./htmlProfile"); 
// variable to hold questions for prompt
const questions = [
    {
      type: "input",
      message: "What is your github username",
      name: "username"
    },
    {
    type: "list",
    message: "Select your favorite color:",
    name: "color",
    choices: ["green", "blue-ish", "grey", "purple"]
    }
  ];
// function to prompt user for questions
function askAboutIt(){
    inquirer.prompt(questions);
};

// function to use answers
function getResponse(response) {
    const gitURL = `https://github.com/${response.username}`;
    const queryUrl = `https://api.github.com/users/${response.username}`;
    const starredUrl = `https://api.github.com/users/${response.username}/starred`;
    const favColor = response.color;
    console.log(`Thanks! Your favorite color is ${favColor} and your github url is ${gitURL}.`)

    // return axios.all([axios.get(queryUrl), axios.get(starredUrl)]);
  };

  askAboutIt()
 


// Prompt user with Inquirer
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your github username",
//       name: "username"
//     },
//     {
//     type: "list",
//     message: "Select your favorite color:",
//     name: "color",
//     choices: ["green", "blue-ish", "grey", "purple"]
//     }
//   ])
//   .then(function(response) {
//       const gitUser = response.username;
//       const color = response.color;
//       const gitURL = 'https://github.com/';
//       const gitProfile = `${gitURL}${gitUser}`;

//       console.log(`Thanks! Your favorite color is ${color} and your github url is ${gitProfile}.`);
//     });
  

//add new line to the current file
// fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Commit logged!");
//   }

// });