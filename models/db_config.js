const mongoose = require("mongoose");

mongoose.connect(

    // le lien de la connexion a la BD
    "mongodb://localhost:27017/contact",

    // tjr mettre ces 2 attributs a true
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },

    // une fonction de gestion des erreurs
    (err) => {
        err ? console.log(`mongodb disconnect ${err}`) 
        : console.log("mongodb connected")
    }
)
