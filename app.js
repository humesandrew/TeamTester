const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./style/css")

const Manager = require("./lib/manager")
const Employee = require("./lib/employee")


let finalTeamArray = [];

function startingPrompt() {
    inquirer.prompt([
        {
            message: "Welcome to Team Generator. What is your team's name?",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })

    
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            message: "What is the manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teamMember)
            console.log(finalTeamArray)
            // addTeamMembers();
            compileTeam();
        });

};

//starting rendering component//

function compileTeam() {
    console.log("Best of luck to the team. Compiling HTML...")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${finalTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);


for (let i = 1; i < finalTeamArray.length; i++) {
    let object = `
    <div class="member-card">
        <div class="card-top">
            <h2>${finalTeamArray[i].name}</h2>
            <h2>${finalTeamArray[i].title}</h2>
        </div>
        <div class="card-bottom">
            <p>Employee ID: ${finalTeamArray[i].id}</p>
            <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
    `
    if (finalTeamArray[i].officeNumber) {
        object += `
        <p>Office Number: ${finalTeamArray[i].officeNumber}</p>
        `
    }
    if (finalTeamArray[i].github) {
        object += `
        <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
        `
    }
    if (finalTeamArray[i].school) {
        object += `
        <p>School: ${finalTeamArray[i].school}</p>
        `
    }
    object += `
    </div>
    </div>
    `
    htmlArray.push(object);
    fs.writeFile(`./html/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })

}
}



// leave as last line // 
startingPrompt();