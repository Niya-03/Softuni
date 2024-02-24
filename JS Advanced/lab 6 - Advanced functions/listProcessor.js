function listProcessor(commands) {
    let result = [];
    for (let command of commands) {
        let [current, str] = command.split(" ");

        if (current == "add") {
            add(str);
        } else if (current == "remove") {
            remove(str);
        } else if (current == "print") {
            print(str);
        }
    }

    function add(str) {
        result.push(str);
    }

    function remove(str) {
        result = result.filter((el) => el != str);
    }

    function print(str) {
        console.log(result.join(","));
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])