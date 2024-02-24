function cars(input) {
    let arr = [];

    for (let data of input) {
        let [command, name, el1, el2] = data.split(" ");

        if (command == "print") {
            print(name);
        } else if (command == "set") {
            set(name, el1, el2);
        } else if (el1 == "inherits") {
            inherit(name, el2);
        } else if (command == "create") {
            create(name);
        }
    }

    function create(name) {
        let obj = {};
        obj.name = name;
        arr.push(obj);
    }

    function inherit(name, parentName) {
        // let obj = {};
        
        for (let object of arr) {
            if (object.name == parentName) {
                let obj = Object.assign({}, object);
                obj.name = name;
            }
        }
    }

    function set(name, key, value) {
        for (let object of arr) {
            if (object.name == name) {
                object[key] = value;
            }
        }
    }

    function print(name) {
        let result = [];
        for (let object of arr) {
            if (object.name == name) {
                let first = true;
                for (const key in object) {
                    if (first) {
                        first = false;
                        continue;
                    } else {
                        result.push(`${key}:${object[key]}`);
                    }
                }
                console.log(result.join(","));
            }
        }
    }
}

cars(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2'])

