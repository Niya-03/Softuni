function deserializeAString(input) {
    let resultArr = [];

    let index = 0;
    let command = input[index];

    while (command !== "end") {
        let currentNums = command.split("/");
        let letterAndFirst = currentNums.shift().split(":");
        let letter = letterAndFirst.shift();
        let first = letterAndFirst[0];
        currentNums.unshift(first);

        for (let num of currentNums) {
            resultArr[num] = letter;
        }

        index++;
        command = input[index];
    }

    console.log(resultArr.join(""));
}

deserializeAString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']

)