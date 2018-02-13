//server set up

//app.js

//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
//assign 3000 - 3999 as your port
const PORT = process.env.PORT || 3000;


// tells the server to listen for requests on port
//3000 AKA localhost:3000 
app.listen(PORT, function(){
console.log("========================")
console.log('LISTENING ON PORT ${PORT}');
console.log("============================")

});