function addressBook(input) {
    let book = {};

    for (const line of input) {
        let [name, address] = line.split(":");
        book[name] = address;
    }

    let sorted = Object.entries(book);

    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    for (const entry of sorted) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)