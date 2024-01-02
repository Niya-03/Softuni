function magicMatrices(matr) {
    let flag = true;
    let sum = matr[0].reduce((a, b) => a + b);

    for (let i = 0; i < matr.length; i++) {
        let rowsum = 0;

        let row = matr[i];

        for (let g = 0; g < row.length; g++) {
            rowsum += row[g];
        }
        if (rowsum != sum) {
            return false;
        }
    }

    for (let i = 0; i < matr.length; i++) {
        let colsum = 0

        for (let rownum = 0; rownum < matr.length; rownum++) {
            colsum += matr[rownum][i];
        }
        if (colsum != sum) {
            return false;
        }
    }

    return true
}

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])