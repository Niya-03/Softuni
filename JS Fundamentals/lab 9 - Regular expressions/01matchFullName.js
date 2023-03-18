function matchName (text){
    let pattern = /\b([A-Z][a-z]+) ([A-Z][a-z]+)\b/g;
    let validNames = [];

    let matches = text.match(pattern);
    
    for (let match of matches) {
        validNames.push(match);
    }

    console.log(validNames.join(" "));

}

matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")