const express = require('express');

require('./db/conn');

const Student=require("./db/models/students")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
//Get request 
app.get('/',(req,res)=>{
    res.send("Get Request - Raghav")
})

//Post request
app.post('/students',(req,res) => {

    console.log(req.body);
    const user= new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e);
    })
    
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
