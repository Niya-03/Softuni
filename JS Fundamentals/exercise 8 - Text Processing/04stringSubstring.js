function stringSubstring(word, text){
    text = text.split(" ");
    let notFound = true;
    for (let element of text) {
        let currentword = element.toLowerCase();

        if(currentword === word){
            console.log(word);
            notFound = false;
            break;
        }
    }

    if(notFound){
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
'JavaScript is the best programming language'

)