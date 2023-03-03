function comapanyUsers(input) {
    let companies = new Map();

    for (line of input) {
        let [companyName, employeeId] = line.split(" -> ");

        if (!companies.has(companyName)) {
            companies.set(companyName, new Set());
        }

        companies.get(companyName).add(employeeId);
    }

    let sorted = Array.from(companies);

    sorted.sort((a, b) => {
        let key1 = a[0];
        let key2 = b[0];

        return key1.localeCompare(key2);
    });

    for (company of sorted) {
        let name = company[0];
        let employees = company[1];
        console.log(name)

        let ids = employees.values();

        for (const iterator of ids) {
            console.log(`-- ${iterator}`);
        }
    }
}

comapanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)