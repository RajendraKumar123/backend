//initialization
const express=require('express');
const app = express();
// const router = express.Router();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//true -> Nested Objects (Correct)
//false ->Nested Objects (Not Correct)
const mongoDbPath="mongodb+srv://rajendrakumar123:joyboy28@cluster0.gfiifn3.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDbPath).then(function(){
    console.log("Connected to MongoDB");
    app.get("/",function(req,res){
        const response = {statuscode: res.statusCode, message: "API Works!"};
        // console.log("hello")
        res.send(response);
    });
    app.get("/notes", function(req,res) {
        // var notes =await Note.find()
        res.send("This is Notes Route");
    });
    const noteRouter = require('./routes/Note');
    app.use("/notes",noteRouter);
});
//Starting the sever on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("Server started a PORT: "+PORT);
});