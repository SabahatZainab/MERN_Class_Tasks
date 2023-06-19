//server banai hai jo success p hello world print kar raha hai
// const http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);

//use built in function for reading text file
// const fs = require('fs');
// fs.readFile('demofile.txt','utf8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// });

//Json Example

// const myJson = {
//     "name": "Sabahat Zainab"
// }
// console.log(myJson.name);

//express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Get API, Server is Healthy!!!!')
})

app.post("/",function(req,res){
    const body = req.body;
    console.log(body)
    if(body.username==="abc" && body.password==="123"){

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: {
                id: "123"
            }
        })
    }else{
        res.status(401).json({
            success: false,
            message: "Login failed"
        })
    }
})
app.get('/details',function(req,res){
    const body = req.query;
    if(body.id === "123"){
        res.status(200).json({
            success: true,
            message: "This is user's details",
            data: [{
                "name":"abc",
                "posts":["hello", "world"],
                "age":"78",
            }]
        })

    }else{
        res.status(404).json({
            success: false,
            message: "user not found"
        })
    }
})
app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});