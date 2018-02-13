//server set up

//app.js

//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
//assign 3000 - 3999 as your port
const PORT = process.env.PORT || 3000;


app.get('/', function(req, res) {
res.send("Welcome to express pizza!")

})

app.get('/topping/pepperoni', function(req, res){
res.send("pepperoni pizza! Good choice!")

})

app.get('/order/:amount/:size', function(req, res){
res.send("Your order for 10 medium pizzas will be ready in 1 min!")

})
// tells the server to listen for requests on port
//3000 AKA localhost:3000 
app.listen(PORT, function(){
console.log("========================")
console.log('LISTENING ON PORT ${PORT}');
console.log("============================")

});