/* const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

app.get("/users",(req,res)=>{
    const html = 
    <ul>
        ${users.map((user) =>'<li>${users.first_name}</li>')}
    </ul>
    res.send(html); 

});


app.listen(port,()=>console.log('server started port${port}'));
 */




const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({extended:false}));




app.get("/api/users",(req,res)=>{
    return res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
});

/*  app.get("/api/users/:name",(req,res)=>{
    const name = req.params.name;
    const show = users.find((show)=> show.name === name);
    return res.json(show);
}); */


app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.lenght});
    });

   
});





 

app.listen(4000,()=>{
    console.log("server started at the port 8080");
});






















