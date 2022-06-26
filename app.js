const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Massage = require("./models/contact");


// middleware static 

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))

app.set("view engine", "ejs")


//
app.get("/", (req, res) => {
    res.render('index.ejs');
});
app.get("/submit", (req, res) => {
    res.render('/submit');
});

// create a new user in our database

app.post("/contact", async(req, res) => {
    try {
        const sendmsg = new Massage({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message
        })
        const getting = await sendmsg.save();
        res.redirect("index.html");
    } catch (error) {
        res.status(400).send("your error", error);
    }
});
app.listen(port, () => {
    console.log(`server is running at port no: ${port}`)
});