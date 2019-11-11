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
// function to prompt user for questions, c-log response & call github API
function askAboutIt(){
    inquirer.prompt(questions)
    .then(function(response) {
        const gitUser = response.username;
        const color = response.color;
        const gitURL = 'https://github.com/';
        const gitProfile = `${gitURL}${gitUser}`;  
        console.log(`Thanks! Your favorite color is ${color} and your github url is ${gitProfile}.`);
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        const starredURL = `https://api.github.com/users/${data.username}/starred`;

        axios.get(queryUrl).then(function(response) {
            
            fs.writeFile("test.txt", response.name , function(err) {
              if (err) {
                throw err;
              }
      
              console.log(`Saved ${response.name} to file`);
            });
          });
    });
};
askAboutIt();

  

//add new line to the current file
// fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Commit logged!");
//   }

// });