function generateReport() {
    const table = document.getElementsByTagName("table");
    let headBody = table[0].children;
    let body = headBody[1].children;
   
    let objArr = [];   
    let colCounter = -1;
    const valueArr = document.querySelectorAll("input");
    
    for(let node of valueArr){
        ++colCounter;
        if(node.checked){
            
            for(let i = 0;i< body.length; i++){
                let obj = {};
                obj[node.name] = body[i].children[colCounter].textContent;
                objArr.push(obj);
                
            }
            break;
        }       
    }
    
    ++colCounter
    for(let i = colCounter; i < valueArr.length; i++){
        
        if(valueArr[i].checked){
            
            for(let j = 0;j< body.length; j++){
                let current = objArr[j];
                current[valueArr[i].name] = body[j] .children[colCounter].textContent;
            }
        }
        ++colCounter;
    }

    let result = JSON.stringify(objArr);
    const output = document.getElementById("output");
    output.textContent = result;
}


