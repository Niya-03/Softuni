function cutAndReverse(str) {
    let secondHalf = str.substring((str.length / 2)).split("").reverse().join("");
    let firstHalf = str.substring(0, secondHalf.length).split("").reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')