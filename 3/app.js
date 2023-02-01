
function checkFileExistence(filePath){
    const fs=require("fs");
    let doesExist= fs.existsSync(filePath);
if(doesExist){
    console.log("file is Available")
}
else{
    console.log("The desired file was not found!")
}
    
}
checkFileExistence("./gholi.txt");
checkFileExistence("./test.txt");


