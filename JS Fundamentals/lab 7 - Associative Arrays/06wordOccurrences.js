function wordOccurrences(input) {
    let occurenceMap = new Map();

    for (let word of input) {
        let occurrence = [1];

        if (!occurenceMap.has(word)) {
            occurenceMap.set(word, occurrence[0]);
        } else {
            occurrence = occurrence[0] + occurenceMap.get(word);
            occurenceMap.set(word, occurrence);
        }
    }

    let sorted = Array.from(occurenceMap);

    sorted.sort((a, b) => {
        return b[1] - a[1];
    })

    for (let [word, occurrence] of sorted) {
        console.log(`${word} -> ${occurrence} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])