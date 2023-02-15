function parseCats(catsAsStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catsAsString of catsAsStrings) {
        let tokens = catsAsString.split(" ");
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}