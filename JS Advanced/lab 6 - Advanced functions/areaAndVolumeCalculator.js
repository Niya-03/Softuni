function areaVol(areaFunc, volFunc, shapesJSON) {
    const shapes = JSON.parse(shapesJSON);
    const result = [];

    for (let shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape);

        const current = { area, volume };

        result.push(current);
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y)
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const s1 = `[
    {"x":"1","y":"2","z":"10"},   
    {"x":"7","y":"7","z":"10"},   
    {"x":"5","y":"2","z":"10"}]`

areaVol(area, vol, s1)