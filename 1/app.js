const fs= require("fs");
fs.appendFile("./text.txt","My Name Is Hassan Karami.",function(err){
   if(err){
      console.log("Error: ",err);
   }
   
})