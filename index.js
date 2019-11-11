// Require File System 
var fs = require("fs");
// Require Inquirer
var inquirer = require("inquirer");
// Require Axios
const axios = require("axios");

// Prompt user with Inquirer
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github username",
      name: "username"
    },
    {
    type: "list",
    message: "Select your favorite color:",
    name: "color",
    choices: ["green", "blue-ish", "grey", "red", "purple"]
    }
  ])
  .then(function(response) {
      const gitUser = response.username;
      const color = response.color;
      const gitURL = 'https://github.com/';
      const gitProfile = `${gitURL}${gitUser}`;

      console.log(`Thanks! Your favorite color is ${color} and your github url is ${gitProfile}.`);
    });
    
    // if (response.confirm === response.password) {
    //   console.log("Thanks! Your user name is ");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }




//add new line to the current file
fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

  if (err) {
    console.log(err);
  }
  else {
    console.log("Commit logged!");
  }

});