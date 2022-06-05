const express = require("express");
const path = require("path");
const app = express();
res.sendFile(path.resolve('Public/index.html'));
// middleware static 

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../Public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));




//
app.get("/", (req, res) => {
    res.sendFile('../Public/index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`server is running at port no: ${port}`)
});