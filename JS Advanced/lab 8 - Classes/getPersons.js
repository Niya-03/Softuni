class Person{
    _firstName;
    _lastName;
    _age;
    _email;

    constructor(firstName, lastName,age, email){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        
    }

    get firstName(){
        return this._firstName
    }

    set firstName(value){
        this._firstName = value;
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        this._lastName = value;
    }

    get age(){
        return this._age
    }

    set age(value){
        this._age = value;
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value;
    }

    // toString(){
    //     return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    // }
}

function personArr(){
    let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let softuni = new Person('SoftUni');
    let stephan = new Person('Stephan', 'Johnson', 25);
    let gabriel = new Person('Gabrie', 'Peterson', 24, 'g.p@gmail.com');

    let arr = [];
    arr.push(anna, softuni, stephan, gabriel);
    return arr;
}

console.log(personArr())


