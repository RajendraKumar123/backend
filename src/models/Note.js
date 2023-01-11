// steps:
//1.define schema --->Note: id,userid,title,content,created_at,updated_at


const mongoose = require('mongoose');
const noteSchema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        // unique:true,
        required:true
    },
    title:{
        type:String,
        // unique:true,
        required:true,
    },
    content:{
        type:String,
    },
    dateadded:{
        type:Date,
        default:Date.now
    },
    dateupdated:{
        type:Date,
        default:Date.now
    },
});

module.exports=mongoose.model("Note",noteSchema);