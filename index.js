const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const pdf = require("html-pdf");
const htmlProfile = require("./htmlProfile");
const filename = "index.html";
const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:"
  },
  {
    type: "list",
    message: "Please pick your favorite color:",
    name: "color",
    choices: ["green", "blue", "pink", "red"]
  }
];

const startQuestions = () => {
  return inquirer.prompt(questions);
};

const writeToFile = (filename, data) => {
  fs.writeFile(filename, data, function(err) {
    if (err) console.log(err);
    console.log("File has been created successfully");
  });
};

const pdfConverter = page => {
  const options = {
    format: "Legal"
  };
  pdf.create(page, options).toFile("./devpage.pdf", function(err, res) {
    if (err) return console.log(`${err}`);
    console.log(`Your PDF is now available in the root folder of this project`);
  });
};

const gitAPICaller = data => {
  const userURL = `https://api.github.com/users/${data.username}`;
  const favURL = `https://api.github.com/users/${data.username}/starred`;
  return axios.all([axios.get(userURL), axios.get(favURL)]);
};


async function start() {
  try {
    const data = await startQuestions();
    const userResponse = await gitAPICaller(data);
    const page = htmlProfile(data, userResponse);
    writeToFile(filename, page);
    pdfConverter(page);
  } catch (error) {
    console.log(`${error}`);
  }
}

start();