class List {
    list;
    size;

    constructor(){
        this.list = [];
        this.size = this.list.length;
    }

    add(el) {
        if(typeof el != 'number'){
            throw new TypeError('Element must be a number');
        }
        this.list.push(el);
        this.list.sort((a,b) => a - b);
        this.size = this.list.length;
        return this.list;
    }

    remove(index) {
        if(index >= this.list.length || index < 0){
            throw new Error('Index must be valid');
        }
        this.list.splice(index, 1);
        this.list.sort((a,b) => a - b);
        this.size = this.list.length;
        return this.list;
    }

    get(index) {
        if(index >= this.list.length || index < 0){
            throw new Error('Index must be valid');
        }
        this.size = this.list.length;
        this.list.sort((a,b) => a - b);
        return this.list[index];
    }

}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1); 
console.log(list.get(1));
console.log(list.size)