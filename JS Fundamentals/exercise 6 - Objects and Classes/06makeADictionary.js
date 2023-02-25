function makeADictionary(dataAsJSON){
    let myCollection = {};

    for(let line of dataAsJSON){
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);
        let key = keys[0];
        myCollection[key] = obj[key];
    }

    let sortKey = Object.keys(myCollection).sort((keyA, keyB) => keyA.localeCompare(keyB));

    for(let key of sortKey){
        console.log(`Term: ${key} => Definition: ${myCollection[key]}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"mmm tasty"}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)


// my best attempt
// function makeADictionary(arr) {

//     let dictionary = [];

//     for (let i = 0; i < arr.length; i++) {
//         let currentEntry = arr[i];
//         currentEntry = JSON.parse(currentEntry);


//         for (let key of Object.keys(currentEntry)) {
//             let currentTerm = key;


//             for (let value of Object.values(currentEntry)) {
//                 let currentDefinition = value;

//                 for (const entry of dictionary) {
//                     if (entry.term === currentTerm) {
                   
//                         entry["term"].definition = currentDefinition;
//                     }
//                 }

//                 let entry = {
//                     term: currentTerm,
//                     definition: currentDefinition
//                 }

//                 dictionary.push(entry);
//             }
//         }
//     }

//     let sorted = dictionary.sort((a, b) => {
//         const termA = a.term.toUpperCase();
//         const termB = b.term.toUpperCase();

//         if (termA < termB) {
//             return -1;
//         }

//         if (termA > termB) {
//             return 1;
//         }

//     });

//     for (const entry of sorted) {
//         console.log(`Term: ${entry.term} => Definition: ${entry.definition}`);
//     }
// }

