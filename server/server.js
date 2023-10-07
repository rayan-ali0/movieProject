import express from "express"
import { } from "dotenv/config"
const app = express()
const port = process.env.PORT
import { mongoose } from "mongoose"
const mongo_url = process.env.MOVIE_URL
import movieController  from './Controllers/movieController.js';

mongoose.connect(mongo_url)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected & listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    }

    )
// app.use(express.json);

app.use((req, res, next) => {
    res.removeHeader('Permissions-Policy', 'ch-ua-form-factor');
    next();
  });
const users = [
    { username: 'Rayan', password: '1234' },
    { username: 'Jane', password: '5678' },
    { username: 'Dohm', password: '9101' }

];

app.get('/', (req, res) => {
    res.send("OK!")
})

app.get('/test', (req, res) => {
    res.json({ status: 200, message: "ok" })
})
var dateTime = new Date();

app.get('/time', (req, res) => {
   const currentTime = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
    res.json({ status: 200, message: currentTime })
})

app.get(`/hello/:Id?`, (req, res) => {
    let id = req.params.Id;
    id ? res.send(`Hello ${id}`) : res.send("Hello")
})
app.get(`/search`, (req, res) => {
    let search = req.query.s;// I put .s in order to take just the variable s in the url if I used req.query it will take all variable in the url and put them in an object
    search ? res.json({ status: 200, message: "ok", data: search }) :
        res.status(500).json({ status: 500, error: true, message: "you have to provide a search" })
        //500 means internel server errors
})


app.get("/users/get", (req, res) => {
    let userName = req.query.name;
    if (userName) {
        let user = users.find((user) => user.username === userName)
        res.json(user)
    }
    res.json(users)
}
)

app.get("/users/get/order", (req, res) => {
    res.json({ status: 200, data: users.sort((user1, user2) => user1.username.localeCompare(user2.username)) })
}
)
app.post("/users/add",(req,res)=>{
    let {username,password}=req.query;
    const newUser = { username:username, password:password}
     users.push(newUser);
    res.json(newUser);
})
app.delete("/users/delete/:username",(req,res)=>{
    let userName = req.params.username;
     const index=users.findIndex((user)=>user.username===userName)
    if(index===-1){
        res.json({error:"user not found"});
    }
    else{
        users.splice(index,1)
        res.json(users);
    }
})

function isAuthenticated(req,res,next){
   let userName=req.headers.username;
    let password=req.headers.password;
    const index=users.findIndex((user)=>user.username===userName && user.password===password)
    
if(index!==-1){
next();
}
else{
    res.status(401).json({error:"Access Forbidden"})
}
}

app.get('/movies/get', movieController.get)

app.get(`/movies/get/:order`, movieController.getByOrder)

app.get(`/movies/get/id/:ID`, movieController.getById)

app.post("/movies/add", movieController.add);

app.delete('/movies/delete/:ID', movieController.deleteById)

app.put("/movies/edit/:ID",isAuthenticated, movieController.editById)

