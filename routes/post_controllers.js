const express = require("express");
const router = express.Router();
const PostModel = require("../models/post_model");
const ObjectID = require('mongoose').Types.ObjectId;


// READ

router.get('/', (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) {
            res.send(docs)
        }else{
            console.log(`erreur: ${err}`)
        }
    })
})



//POST
router.post("/", (req, res) => {
    const newContact = new PostModel({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        age: req.body.age,
    });

    newContact.save((err, docs) => {
        if(!err) {
            res.send(docs)
        }else(
            console.log(`erreur: ${err}`)
        )
    })
})

module.exports = router;