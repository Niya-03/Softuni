class WineSelection {
    space;
    wines = [];
    bill = 0;

    constructor(space) {
        this.space = space;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length + 1 > this.space) {
            throw Error("Not enough space in the cellar.");
        }

        let obj = {
            wineName: wineName,
            wineType: wineType,
            price: price,
            paid: false
        }

        this.wines.push(obj);

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let found = this.wines.find((el) => el.wineName == wineName);
        let index = this.wines.indexOf(found);
        if (index == -1) {
            throw Error(`${wineName} is not in the cellar.`);
        } else if (this.wines[index].paid == true) {
            throw Error(`${wineName} has already been paid.`);
        } else {
            this.wines[index].paid = true;
            this.bill += price;

            return `You bought a ${wineName} for a ${price}$.`;
        }
    }

    openBottle(wineName) {
        let found = this.wines.find((el) => el.wineName == wineName);
        let index = this.wines.indexOf(found);

        if (index == -1) {
            throw Error(`The wine, you're looking for, is not found.`);
        } else if (this.wines[index].paid == false) {
            throw Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            this.wines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`;
        }
    }

    cellarRevision(wineType) {

        let found = this.wines.find((el) => el.wineType == wineType);
        let index = this.wines.indexOf(found);
        if (wineType == undefined) {
            let res = [];
            res.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            res.push(`You paid ${this.bill}$ for the wine.`);

            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (const e of sorted) {
                res.push(`${e.wineName} > ${e.wineType} - ${e.paid ? 'Has Paid' : 'Not Paid'}.`);
            }

            return res.join("\n");
        } else if (index == -1) {
            throw Error(`There is no ${wineType} in the cellar.`);
        } else {
            return `${this.wines[index].wineName} > ${this.wines[index].wineType} - ${this.wines[index].paid ? 'Has Paid' : 'Not Paid'}.`;
        }
    }
}


const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());