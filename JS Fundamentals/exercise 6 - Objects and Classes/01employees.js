function employees (arr){
    let list = {};

    for (const person of arr) {
        list.name = person;
        list.personalNum = person.length;
        console.log(`Name: ${list.name} -- Personal Number: ${list.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])