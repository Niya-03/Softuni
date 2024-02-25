function argumentInfo(...args) {
    let obj = {};
    for (let arg of args) {
        let type = typeof (arg);
        console.log(`${type}: ${arg}`);
        if (obj.hasOwnProperty(type)) {
            obj[type].push(arg);
        } else {
            obj[type] = [];
            obj[type].push(arg);
        }
    }

    let arr = [];
    for (const key in obj) {
        arr.push([key, obj[key].length]);
    }
    arr = arr.sort((a, b) => b[1] - a[1])
    .map((a) => console.log(`${a[0]} = ${a[1]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })