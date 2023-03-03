function wordTracker(input) {

    let obj = {};

    let searched = input.shift().split(" ");
    for (const word of searched) {
        obj[word] = 0;
    }

    for (const element of input) {
        if (obj.hasOwnProperty(element)) {
            obj[element] = obj[element] + 1
        }
    }

    let sorted = Object.entries(obj);

    sorted.sort((a, b) => b[1] - a[1]);

    for (const element of sorted) {
        console.log(`${element[0]} - ${element[1]}`);
    }
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)