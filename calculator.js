//jshint esversion:6


const express = require('express');
const bodyParser = require  ('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {
    
    res.sendFile(__dirname + "/index.html");
  });

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    let weight = Number (req.body.num1);
    let height = Number (req.body.num2 / 100);

    let resultat = Math.round(weight / Math.pow(height, 2) * 10) / 10 ;
      res.send("Your body index is " + resultat );
});



app.post("/", function (req, res) {
  let num1 = Number (req.body.num1);
  let num2 = Number (req.body.num2);

  let result = num1 + num2;
    res.send("Результат вычислений равен " + result);
});

app.listen(3000, function (){
  console.log("server is runing");
});  