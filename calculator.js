const express=require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function (req,res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let total = num1+num2;
    res.send("The res`ult of the Calculation is "+total);
})
app.listen(3000,function (){
    console.log("Server is running on port 3000");
})