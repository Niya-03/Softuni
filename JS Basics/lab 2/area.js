function area(input){
    let type = input[0]
    let res = 0

    if(type === "square"){
        let a = Number(input[1])
        res = a*a

    } else if(type === "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])

        res = a*b

    } else if(type === "circle"){
        let r = Number(input[1])
        res = Math.pow(r, 2) * Math.PI
    } else{
        let side = Number(input[1])
        let height = Number(input[2])

        res = side * height /2
    }

console.log(res.toFixed(3))}

area(["triangle",
"4.5",
"20"])


