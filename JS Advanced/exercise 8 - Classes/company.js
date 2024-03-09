class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        if (name == "" || name == undefined || name == null) {
            throw new Error("Invalid input!");
        } else if (salary == "" || salary == undefined || salary == null) {
            throw new Error("Invalid input!");
        } else if (position == "" || position == undefined || position == null) {
            throw new Error("Invalid input!");
        } else if (department == "" || department == undefined || department == null) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        let employee = {};
        employee.name = name;
        employee.salary = salary;
        employee.position = position;
        employee.department = department;

        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push(employee);
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        } else {
            this.departments[department] = [];
            this.departments[department].push(employee);
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let currentHighestDepartment = '';
        let highestAvgSalary = 0;

        let currentAvgSalary = 0;

        for (const department in this.departments) {
            let sum = 0;
            for (const employee of this.departments[department]) {
                sum += employee.salary;
            }
            currentAvgSalary = sum / this.departments[department].length;

            if (highestAvgSalary < currentAvgSalary) {
                highestAvgSalary = currentAvgSalary;
                currentHighestDepartment = department;
            }
        }

        let sorted = this.departments[currentHighestDepartment].sort((a, b) => {
            if (a.salary > b.salary) {
                return -1;
            }

            if (a.salary < b.salary) {
                return 1;
            }

            if (a.name < b.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }
        })

        let sortedString = '';

        for (const iterator of sorted) {
           sortedString += `${iterator.name} ${iterator.salary} ${iterator.position}\n`;
        }

        return `Best Department is: ${currentHighestDepartment}\n` + `Average salary: ${highestAvgSalary.toFixed(2)}\n` + sortedString.substring(0,sortedString.length-1);
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());