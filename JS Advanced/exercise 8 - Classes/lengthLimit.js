class Stringer {
    innerString;
    innerLength;

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(len) {
        this.innerLength += len;
    }

    decrease(len) {
        if (this.innerLength - len < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= len;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else if (this.innerLength == 0) {
            return "...";
        } else {
            let result = '';
            result = this.innerString.slice(0, this.innerLength);
            return result + "...";
        }
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test

