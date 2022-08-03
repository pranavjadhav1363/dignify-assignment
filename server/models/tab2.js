const mongoose = require('mongoose');


const tabtwo = mongoose.Schema({
    BusinessName: {
        type: String,
        required: true
    },
    GstNo: {
        type: Number,
        required: true
    },

    Address: {
        type: String,
        required: true,
    },

    CompanyTurnover: {
        type: Number,
        required: true
    },
    CompanyEmployees: {
        type: Number,
        require: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'firsttab',
        required: true
    },

})


const secondtab = mongoose.model('secondtab', tabtwo);
module.exports = secondtab