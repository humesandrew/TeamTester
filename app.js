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
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
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
        });

}

startingPrompt();