const fs= require("fs");
const { json } = require("node:stream/consumers");
fs.readFile("./user-data.json","utf-8",function(err,data){
    if(data){
        let userData= JSON.parse(data);
        let bt18= userData.filter(user=>user.age>18);
        console.log(bt18);
    }
    if(err){
        console.log("Error!");
    }

});
