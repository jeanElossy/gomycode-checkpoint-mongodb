const mongoose = require("mongoose");

const PostModel = mongoose.model(
    // le nom de la BD
    "contact",

    // les donnees
    {
        // un doc
        nom: {
            type: String,
            require: true
        },

        prenom: {
            type: String,
            require: true
        },

        email : {
            type: String,
            require: true
        },

        age : {
            type : Number,
            require : true
        }

    },

    // le nom de la collection
    "contactlist"
);

module.exports = PostModel

