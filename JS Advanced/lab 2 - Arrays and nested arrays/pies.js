function pieceOfPie(pies, first, last){
    let firstIndex = pies.indexOf(first);
    let lastIndex = pies.indexOf(last);
    let result = pies.slice(firstIndex, lastIndex+1);

    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)