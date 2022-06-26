const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Massage = require("./models/contact");


// middleware static 

const port = process.env.PORT || 3000;
// const static_path = path.join(__dirname, "./public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(static_path));

app.use('/Public',express.static('Public'))
app.set("view engine", "ejs")


//
app.get("/", (req, res) => {
    res.render('index');
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
        res.redirect("index");
    } catch (error) {
        res.status(400).send("your error", error);
    }
});
app.listen(port, () => {
    console.log(`server is running at port no: ${port}`)
});