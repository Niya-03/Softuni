function project(input){
    let name = input[0]
    let projects = Number(input[1])
    let time = Number(projects*3)

    let mes = `The architect ${name} will need ${time} hours to complete ${projects} project/s.`
    console.log(mes)
}

project(["Gosho", "7"])