const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dignify', () => {
    console.log("database connected")
})