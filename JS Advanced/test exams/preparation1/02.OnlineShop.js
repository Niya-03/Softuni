class OnlineShop {
    warehouseSpace;
    products = [];
    sales = [];

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace - spaceRequired < 0) {
            throw Error("Not enough space in the warehouse.");
        } else {
            let obj =
            {
                'product': product,
                'quantity': quantity,
            }
            this.products.push(obj);
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`;
        }
    }

    quantityCheck(product, minimalQuantity) {
        let isntThere = true;
        let index = 0;

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product == product) {
                isntThere = false;
                index = i;
                break;
            }
        }

        if (isntThere) {
            throw Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= this.products[index].quantity) {
            return `You have enough from product ${product}.`;
        } else {
            let res = `You added ${minimalQuantity - this.products[index].quantity} more from the ${product} products.`;
            this.products[index].quantity = minimalQuantity;
            return res;
        }
    }

    sellProduct(product) {
        let notFound = true;
        let index = 0;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product == product) {
                notFound = false;
                index = i;
                break;
            }
        }

        if (notFound) {
            throw Error(`There is no ${product} in the warehouse.`);
        } else {
            this.products[index].quantity--;
            let isntThere = true;

            for (let p of this.sales) {
                if (p.product == product) {
                    isntThere = false;
                    p.quantity++;
                }
            }

            if (isntThere) {
                let obj = {
                    'product': product,
                    'quantity': 1
                }

                this.sales.push(obj);
            }

            return `The ${product} has been successfully sold.`;
        }
    }

    revision() {
        if (this.sales.length == 0) {
            throw Error("There are no sales today!");
        }

        let salesSum = 0;
        let res = '';

        for (let sale of this.sales) {
            salesSum += sale.quantity;
        }

        res += `You sold ${salesSum} products today!\nProducts in the warehouse:\n`;

        for (let sale of this.sales) {
            let curQ = 0;
            for (let pr of this.products) {
                if (sale.product == pr.product) {
                    curQ = pr.quantity;
                }
            }

            res += `${sale.product}-${curQ} more left\n`;
        }

        return res.substring(0, res.length - 1);
    }

}


const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision())

