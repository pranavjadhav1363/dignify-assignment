require('dotenv').config()
// require('./db/db')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const postdetails = require('./routes/postdetails')
const PORT = process.env.PORT || 5000
const URI = process.env.URI;

mongoose.connect(URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(URI)
    console.log("MongoDB database connection established successfully.");
});


// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.json())
app.use('/post', postdetails)







app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))