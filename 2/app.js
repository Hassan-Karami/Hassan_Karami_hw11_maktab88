const fs= require("fs");
fs.writeFile("./second-text.txt","Current Text And File Has been Created By app.js. ",function(err){
   if(err) {
    console.log(err);
   }
})