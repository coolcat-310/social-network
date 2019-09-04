const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    budget_type:{
        type: String,
        enum: ['revenue', 'gross margin'],
        required: true
    },
    site:{
        type: String,
        enum: ['htl', 'mssi'],
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    trade_ico:{
        type: String,
        enum: ['trade', 'ico']
    },
    oem_spare:{
        type: String,
        enum: ['spares', 'oem', 'other']
    },
    amount:{
        type: Number,
        required: true
    }

});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;