function addAndRemoveElements (arr){
    let res = [];
    let num = 1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "add"){
            res.push(num);
        }else if (arr[i] == "remove"){
            res.pop();
        }
        num++;
    }

    if(res.length>0){
        console.log(res.join('\n'));
    }else{
        console.log("Empty");
    }
    
}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])