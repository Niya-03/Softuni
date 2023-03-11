function revealWords(words, text){
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");

    for(let word of wordsArr){

        for(let j = 0; j< textArr.length; j++){

            
            if(textArr[j].includes("*") && textArr[j].length === word.length){
                textArr[j] = word;
            }
        }
    }

    console.log(textArr.join(" "));
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)