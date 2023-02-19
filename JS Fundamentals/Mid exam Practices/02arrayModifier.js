function arrayModifier(arr) {
    let values = arr.shift();
    values = values.split(" ");
    values = values.map(Number);

    let index = 0;
    let command = arr[index];

    while (command !== "end") {
        command = command.split(" ");
        let modification = command[0];
        let index1 = Number(command[1]);
        let index2 = Number(command[2]);

        switch (modification) {
            case "swap":

                let el1 = values.slice(index1, index1 + 1);
                element1 = el1.pop();
                let el2 = values.slice(index2, index2 + 1);
                element2 = el2.pop();

                values.splice(index1, 1, element2);
                values.splice(index2, 1, element1);
                break;
            case "multiply":
                let multEl1 = values.slice(index1, index1 + 1);
                multElement1 = multEl1.pop();
                let multEl2 = values.slice(index2, index2 + 1);
                multElement2 = multEl2.pop();

                values[index1] = multElement1 * multElement2;
                break;
            case "decrease": values = values.map(x => x - 1); break;
        }

        index++;
        command = arr[index];
    }

    console.log(values.join(", "));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]

)