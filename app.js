const exp = require("constants");
const express = require("express");
const app = express();



const cors= require('cors');
app.use(cors());


//to use the  the image 
app.use(express.static(__dirname + '/user_images'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./database/db");

const cookRoute = require("./routes/cookRoute");

app.use(cookRoute);

app.listen("180");