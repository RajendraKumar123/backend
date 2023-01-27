const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');

router.post("/list", async function(req,res) {
    var notes =await Note.find({userid: req.body.userid})
    res.json(notes);
});


router.post("/add", async function(req,res) {

    await Note.deleteOne({id:req.body.id});
    // await Note.deleteOne({userid:req.body.userid});
    // res.json(req.body);
    const note = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
        dateadded: req.body.dateadded,
    });
    await note.save();

    const response = {message:"new note added  "+`id:${req.body.id}`};
    res.json(response);
});
router.post("/delete", async function(req,res) {
    await Note.deleteOne({id:req.body.id});
    const response = {message:"note deleted  "+` id: ${req.body.id}`};
    res.json(response);
});
module.exports=router;