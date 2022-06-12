const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/porfolio", { useNewUrlParser: true }).then(() => {
    console.log("sucess")
}).catch((error) => {
    console.log(error);
})