const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://devil:devil@cluster0.k53q7t5.mongodb.net/portfolio?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => {
    console.log("sucess")
}).catch((error) => {
    console.log(error);
})