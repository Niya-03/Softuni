(function solve() {
    String.prototype.ensureStart = function (str) {
        let current = this.substring(0, str.length);
        if (current == str) {
            return this;
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        let current = this.substring(this.length - str.length,);
        if (current == str) {
            return current;
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            let res = '';
            for (let i = 0; i < n; i++) {
                res += ".";
            }
            return res;
        }
        if (this.length <= n) {
            return this;
        } else if (this.includes(" ")) {
            let index = this.lastIndexOf(" ");
            let word = "";
            for (let i = 0; i < index; i++) {
                word += this[i];
            }

            return word + "...";
        } else {
            let res = "";
            for (let i = 0; i < n - 3; i++) {
                res += this[i];
            }
            return res + "...";
        }
    }

    String.format = function (str, ...params) {
        if (str.includes("{")) {
            str = str.split("");
            for (let par of params) {
                if (str.includes("{")) {
                    let index = str.indexOf("{");
                    str.splice(index, 3, par);
                }
            }
            return str.join("");
        } else {
            return str.join("");
        }
    }
})()

let str = 'my string';
console.log(str)
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',

'quick', 'brown');

console.log(str)

str = String.format('jumps {0} {1}',

'dog');
console.log(str)