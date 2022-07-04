const mongoose = require("mongoose");
const express = require('express');
const app = express();
const cors = require('cors')
const connection = require("./db");
const postRoute = require("./routes/post")

//db connection
connection()

//route settings

app.use(cors())
app.use(express.json())
app.use("/api/post", (postRoute));


// server start
app.listen(5000, () => {
    console.log("Server started")
})