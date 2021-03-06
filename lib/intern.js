const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super (name, id, email)
        
        this.title = "Intern"
        this.school = school;
    }

    getID(){
        return this.id;
    }

    getRole(){
        return this.title;
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern