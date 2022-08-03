const mongoose = require('mongoose');


const tab3 = mongoose.Schema({

    loanAmount: {
        type: Number,
        required: true,

    },
    intrestrate: {
        type: Number,
        required: true,

    },
    loantenure:
    {
        type: Number,
        required: true,
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'firsttab',
        required: true
    },



})

const thirdtab = mongoose.model('thirdtab', tab3)
module.exports = thirdtab