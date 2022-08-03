const mongoose = require('mongoose');




const tab1 = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    MobileNo: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10
    }

})


const firsttab = mongoose.model('firsttab', tab1);
module.exports = firsttab