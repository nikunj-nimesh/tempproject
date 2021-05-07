 const express=require("express");
 
 const bodyParser=require("body-parser");
 const app=express();
 app.use(bodyParser.urlencoded({extended:true}));
 

 app.get("/",function(req,res){
     res.sendFile(__dirname+"/index.html");
 })
 
 
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
 var num2=Number(req.body.num2);
 var result=num1+num2;
    res.send("Result of calculation is: "+ result);
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post("/bmicalculator",function(req,res){
    var ht=Number(req.body.height);
    var wt=Number(req.body.weight);
    var bmi=wt/(ht*ht);
    res.send("Your BMI is: "+bmi);
})
 app.listen(3000,function(){
    console.log("Server started at Port 3000");
})
