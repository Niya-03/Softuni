function numbers(seq) {
    seq = seq.split(" ");
    seq = seq.map(Number);

    let sum = 0;
    let count = 0;

    seq.map(x => sum += x);
    seq.map(x => count += 1);

    let average = sum / count;

    seq = seq.filter(x => x > average);
    seq = seq.sort((a, b) => b - a);

    let top5 = seq.slice(0, 5);

    if(top5.length < 1){
        console.log("No");
    }else{
        console.log(top5.join(" "));
    }
}

numbers('1')