class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3]
        this.startDate = params[4];
    }

    get name() { return this._name; }
    
    set name(name) { 
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{1}$');
        if (namePattern.test(name))
        this._name = name;
        else
        throw new "Please enter valid name"; 
    }

    toString() {
        return "id : " + this.id + " Name : " + this.name + " Salary : " + this.salary + " Gender : " + this.gender + " Start Date : " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mr", 40000, "M", new Date());
console.log(employeePayrollData.toString());
