const express = require("express");
const app = express();
require("./models/db_config");
const postRoute = require("./routes/post_controllers")
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use('/contact-list', postRoute);


app.listen(8080, () => {
    console.log("server starting")
})


