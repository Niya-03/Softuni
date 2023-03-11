function extractFile(str){
    str = str.split("\\");
    let fileAndExt = str.pop();
    fileAndExt = fileAndExt.split(".");
    let ext = fileAndExt.pop();
    let name = fileAndExt.join(".")
    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')