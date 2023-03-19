function extractEmails(input){
    let pattern = /[\s][a-zA-Z0-9]+[.\-_]*[\w+]*@([a-z]+[\-]*[\w+]*[.][\w+]+[.]*[\w+]*)/g;

    let matches = input.match(pattern);

    for(let match of matches){

        if(match.endsWith(".")){
            let result = match.substring(0, match.length-1);
            console.log(result);
        }else{
            console.log(match);
        }
    }
}

extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.")