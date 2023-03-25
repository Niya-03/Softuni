function fancyBarcodes(input) {
    let count = Number(input.shift());
    let digitsPattern = /\d/g;
    let pattern = /[@][#]+[A-Z][A-Za-z0-9]{4,}[A-Z][@][#]+/;

    for (let i = 0; i < count; i++) {
        let currentBarcode = input[i];

        if (pattern.test(currentBarcode)) {
            let nums = currentBarcode.matchAll(digitsPattern);
            numsArr = Array.from(nums);
            let sum = "00";

            if (numsArr.length === 0) {
                sum = "00";
            } else {
                sum = "";
                for (let num of numsArr) {
                    sum += num;
                }
            }

            console.log(`Product group: ${sum}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
);