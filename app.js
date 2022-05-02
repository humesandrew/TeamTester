const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./style/css")

const Manager = require("./lib/manager")
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")


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
            addTeamMembers();
            
        });

};

function addTeamMembers() {
    inquirer.prompt([
        {

             //add any team member screen// 
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Add an engineer", "Add an intern", "No thanks. That's my whole team."],
            name: "addMemberData"
        }
    ])

        .then(function (data) {


           
            switch (data.addMemberData) {
                case "Add an engineer":
                    addEngineer();
                    break;

                case "Add an intern":
                    addIntern();
                    break;
                case "No thanks. That's my whole team.":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            message: "What is the engineer's Github profile name?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeamArray.push(teamMember)
           

            ///loop back to add any team member// 
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is the intern's name?",
            name: "name"
        },
        {
            message: "What is the intern's email?",
            name: "email"
        },
        {
            message: "What school is the intern attending?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};



//starting rendering component//

function compileTeam() {
    console.log("Best of luck to the team. Compiling HTML...")

    const htmlArray = []
    const htmlBegin = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Meet the team: ${finalTeamArray[0]}</title>
  
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>Meet the team: ${finalTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBegin);

//separating the for loop logic into the html body


for (let i = 1; i < finalTeamArray.length; i++) {
    let htmlEnd = `
    <div class="team-card">
        <div class="card-top">
            <h2>${finalTeamArray[i].name}</h2>
            <h3>${finalTeamArray[i].title}</h3>
        </div>
        <div class="card-bottom">
        <button onclick="window.location.href='mailto:${finalTeamArray[i].email}';"> Email Jill</button>
            <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
            <p>Employee ID: ${finalTeamArray[i].id}</p>
    `
    if (finalTeamArray[i].officeNumber) {
        htmlEnd += `
        <p>Office Number: ${finalTeamArray[i].officeNumber}</p>
        `
    }
    if (finalTeamArray[i].github) {
        htmlEnd += `
        <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
        `
    }
    if (finalTeamArray[i].school) {
        htmlEnd += `
        <p>School: ${finalTeamArray[i].school}</p>
        `
    }
    htmlEnd += `
    </div>
    </div>
    `
    htmlArray.push(htmlEnd);
    fs.writeFile(`./html/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })

}
}



// leave as last line // 
startingPrompt();