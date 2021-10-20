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

//PUT

router.put('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send(`ID inconnu : ${req.params.id}`)
    }else{
        const updateContact = {
            nom: req.body.nom
        };
        PostModel.findByIdAndUpdate(
            req.params.id,
            {set: updateContact},
            {new: true},
            (err, docs) => {
                if(!err){
                    res.send(docs);
                }else{
                    res.send(`update error: ${err}`);
                }
            }
        )
    }
})


module.exports = router;