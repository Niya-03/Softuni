function matchPhone(input){
    let nums = input[0];
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;

    let matches = nums.match(pattern);

    console.log(matches.join(", "));
}

matchPhone(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])