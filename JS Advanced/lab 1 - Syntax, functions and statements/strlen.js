function strlen(a,b,c){
    let sum = 0;
    sum+=a.length;
    sum+=b.length;
    sum+=c.length;
    let average = sum/3;

    console.log(sum);
    console.log(average.toFixed(0));
}

strlen('chocolate', 'ice cream', 'cake');