class BikeRentalService {
    name;
    location;
    availableBikes = [];

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    addBikes(arr) {
        let buff = [];
        for (let bike of arr) {
            let [brand, quantity, price] = bike.split('-');
            let isntThere = true;
            quantity = Number(quantity);
            price = Number(price);

            for (const el of this.availableBikes) {
                if (el.brand == brand) {
                    isntThere = false;
                    el.quantity += quantity;

                    if (el.price < price) {
                        el.price = price;
                    }
                }
            }

            if (isntThere) {
                let obj = {
                    'brand': brand,
                    'quantity': quantity,
                    'price': price
                }

                this.availableBikes.push(obj);

                if ((buff.find((element) => element == brand)) == undefined) {
                    buff.push(brand);
                }
            }
        }

        return `Successfully added ${buff.join(', ')}`;
    }

    rentBikes(arr) {
        let totalPrice = 0;

        for (let bike of arr) {
            let unavailable = true;
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);


            for (const el of this.availableBikes) {
                if (el.brand == brand) {
                    unavailable = false;
                    if (el.quantity < quantity) {
                        return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
                    }

                    totalPrice += el.price * quantity;
                    el.quantity -= quantity;
                    break;
                }
            }

            if (unavailable) {
                return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
            }
        }


        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    returnBikes(arr) {

        let toReturn = arr.length;
        let returned = 0;
        for (let bike of arr) {

            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);

            for (const el of this.availableBikes) {
                if (el.brand == brand) {
                    returned++;
                    el.quantity += quantity;
                    break;

                }
            }
        }

        if (toReturn > returned) {
            return "Some of the returned bikes are not from our selection.";
        } else {
            return "Thank you for returning!"
        }

    }

    revision() {
        let res = [];
        res.push("Available bikes:");

        let sorted = this.availableBikes.sort((a, b) => a.price - b.price);

        for (const el of sorted) {
            res.push(`${el.brand} quantity:${el.quantity} price:$${el.price}`);
        }

        res.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

        return res.join('\n');
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
console.log(rentalService.revision());

