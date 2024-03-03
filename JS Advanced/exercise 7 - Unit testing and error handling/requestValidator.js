function requestValidator(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalid = true;
    let uriRegex = /[^a-z.0-9]/g;
    let messageRegex = /[<>\&'"]/g;

    for (curmethod of methods) {
        if (obj.method == curmethod) {
            invalid = false;
            break;
        }
    }

    if (invalid) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if(obj.uri == undefined){
        invalid = true;
    }else if(obj.uri.length <1){
        invalid = true;
    }else if(obj.uri.includes('*') && obj.uri.length > 1){
        invalid = true;
    }else{

        if(obj.uri.includes('*') && obj.uri.length == 1){
            invalid = false;
        }else{
            let uriMatches = obj.uri.match(uriRegex);

        if (uriMatches != null || obj.uri.length < 1) {
            invalid = true;
        }
        }
        
    }  

    if (invalid) {
        throw new Error("Invalid request header: Invalid URI");
    }

    invalid = true;

    for (ver of versions) {
        if (obj.version == ver) {
            invalid = false;
            break;
        }
    }

    if (invalid) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if(obj.message == undefined){
        invalid = true;
    }else{
        let mesMatches = obj.uri.match(messageRegex);

        if (mesMatches != null) {
            invalid = true;
        }
    }
   
    if (invalid) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}

requestValidator({
    method: 'POST',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
})