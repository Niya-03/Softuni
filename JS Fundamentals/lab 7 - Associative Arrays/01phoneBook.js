function phoneBook(input){

    let obj = {};

    for(let i = 0; i < input.length; i++){
        let currentElement = input[i].split(" ");
        let name = currentElement[0];
        let number = currentElement[1];

        obj[name] = number;
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)