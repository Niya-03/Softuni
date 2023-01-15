function serial (input){
    let name = input[0]
    let episodeDuration = Number(input[1])
    let restDuration = Number(input[2])

    let timeForLunch = restDuration * 1/8
    let timeForRest = restDuration * 1/4

    let timeLeft = restDuration - timeForLunch - timeForRest

    if(timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`)
    }
}

serial(["Teen Wolf",
"48",
"60"])