const express = require("express")
const mongoose = require("mongoose")
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
mongoose.connect("mongodb+srv://farooq123:farooq123@cluster0.ijdh8yd.mongodb.net/Crud?retryWrites=true&w=majority", {useNewUrlParser: true,
useUnifiedTopology: true}).then(()=>{
    console.log("Connection Successfull");
}).catch((err)=>{
    console.log(err);
})

app.use('/', require('./routes/UserRoutes.js'));

mongoose.set('strictQuery', false);

const port   = 3000






app.listen(port,()=>{
    console.log(`App is listen on https//localhost:${port}`);
})