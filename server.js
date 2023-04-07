const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "register"
})

app.post('/register', (req, res) => { 

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password], 
    (err, result)=> {
        console.log(err)
    } 
    );
});

app.post('/login', (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;
})

db.query(
    "SELECT * FROM users WHERE email = ? and password = ?",
    [email, password], 
    (err, result)=> {
        if (err) {
            res.send({err: err});
        }
        if (result) {
            res.send(result)
        } else {
            res.send({message: "Invalid email and password"});
        }
    }
);


app.listen(3001, ()=> {
    console.log("running server");
}) 