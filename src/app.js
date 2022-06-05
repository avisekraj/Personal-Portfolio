const express = require("express");
const path = require("path");
const app = express();
const html = require("html");
// middleware static 

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));


app.set("view engine", "html")


//
app.get("/", (req, res) => {
    res.render('/index.html');
});

app.listen(port, () => {
    console.log(`server is running at port no: ${port}`)
});