const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitorSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        enum: ['Customer Visit', 'Divisional Visit', 'Government Visit', 'Offsite-Visiting Customer',
            'Offsite-Visiting Supplier', 'PLC Visit', 'Supplier Visit'],
        required: true,
        trim: true
    },
    customer_program:{
        type: String,
        required: true,
        trim: true
    },
    attendees:{
        type: String,
        required: true,
        trim: true
    },
    meeting_location: {
        type: String,
        required: true,
        trim: true
    },
    start_date:{
        type: Date,
        required: true
    },
    end_date:{
        type: Date,
        required: true
    },
    purpose: {
        type: String,
        required: true,
        trim: true
    }
});

VisitorSchema.pre('validate', async function(next){
    const visitor = this;
    if(visitor.start_date > visitor.end_date){
        next(new Error('End Date must be greater than Start Date'))
    }else{
        next();
    }
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;