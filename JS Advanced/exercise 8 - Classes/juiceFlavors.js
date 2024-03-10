function juiceFlavors(arr) {
    let juiceObj = {};
    let bottles = {};

    function addBottles(flavor, quantity){
        let toAdd = (quantity - (quantity % 1000)) / 1000;

        if(toAdd > 0){
            bottles[flavor] = (bottles[flavor] || 0) + toAdd;
            return quantity % 1000;
        }

        return quantity;
    }

    for (let juice of arr) {
        let [flavor, quantity] = juice.split(' => ');
        juiceObj[flavor] = juiceObj[flavor] || 0;

		juiceObj[flavor] = addBottles(flavor, juiceObj[flavor] + Number(quantity))

    }

    return Object.entries(bottles)
		.map(([name, quantity]) => `${name} => ${quantity}`)
		.join('\n')
    
}

console.log(juiceFlavors(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789']))