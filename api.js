/* const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({extended:false}));


app.get("/users",(req,res)=>{
    const html = `<ul>
    ${users.map(user => `<li>${user.first_name}</li>`)}
    
    </ul>`;
    res.send(html);
})

app.get("/api/users",(req,res)=>{
    res.json(users);
});



app.route("/api/users/:id").get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    res.json(user); 
  
  
  }).put((req,res)=>{
    res.json({status:"pending"});
  })
  .delete((req,res)=>{
    res.json({status:"pending"});
  })


  app.post("/api/users",(req,res)=>{
    const body = req.body;
   users.push({...body,id:users.length+1});
   fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"success",id:users.length+1});
   })
  })










app.listen(4000,()=>console.log("servre started at 4000")); */


const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());  // Add this to parse JSON bodies

app.get("/users", (req, res) => {
    const html = `<ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>`;
    res.send(html);
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    })
    .put((req, res) => {
        res.json({ status: "pending" });
    })
    .delete((req, res) => {
        res.json({ status: "pending" });
    });

app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id: users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,tell)=>{
        res.json({status:"succes",id:users.length})
    })
})


app.listen(5000, () => console.log("server started at 4000"));
