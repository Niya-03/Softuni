function count (text, word){
    let counter = 0;
    let arr = text.split(" ");

    for (const token of arr) {
        if(token === word){
            counter++;
        }
    }

    console.log(counter)

}

count('This is a word and it also is a sentence',
'is'
)