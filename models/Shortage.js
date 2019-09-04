const mongoose = require('mongoose');
const validator = require('validator');

/**
 * Shortage as describe to have the following attributes: first_name {String}, last_name {String}, mrpc {String},
 * entry_date {Date}, work_centen {String}, shortage_PN {String}, work_order {String}, work_order_PN {String},
 * work_order {String}, work_order_PN {String},  qty_reqd {String},  buyer_name {String}, expected_qty {string},
 * supplier_name {String}, supplier_location {String}, original_reqd_date, expected_receipt_date, actual_receipt_date,
 * why_late {string}, ffm_name, commit_date
 */
const shortageSchema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true,
        validate: {
            validator: name => {
                return validator.isAlpha(name);
            },
            message: props => `${props.value} is not a valid name.`
        },
        required: true
    },
    last_name:{
        type: String,
        trim: true,
        validate: {
            validator: name =>{
                return validator.isAlpha(name);
            },
            message: props => `${props.value} is not a valid name`
        },
        required: true
    },
    mrpc:{
        type: String,
        enum: ['firex', 'gauges', 'outlet/rupture', 'hpvv/afes', 'military restraint', 'controls', 'comm. restraint',
        'accessories', 'radio freq. cable', 'nuclear & ind. fir', 'engine harness', 'detectors', 'detector tube assm',
        'detector sens assm', 'electronics/ddg', 'bald/thermistor', 'analyzers', 'actuators', 'pumps & motors'],
        required: true
    },
    entry_date:{
        type: Date,
        required: true
    },
    work_center:{
        type: String,
        required: true
    },
    shortage_PN:{
        type: String,
        required: true
    },
    work_order:{
        type: String,
        required: true
    },
    work_order_PN:{
        type: String,
        required: true
    },
    qty_reqd:{
        type: String,
        required: true
    },
    buyer_name:{
        type: String
    },
    expected_qty:{
        type: String
    },
    supplier_name:{
        type: String
    },
    supplier_location:{
        type: String
    },
    original_reqd_date:{
        type: Date
    },
    expected_receipt_date:{
        type: Date
    },
    last_date_updated:{
        type: Date
    },
    actual_receipt_date:{
        type: Date
    },
    why_late:{
        type: String
    },
    ffm_name:{
        type: String
    },
    commit_date:{
        type: Date
    }
},{
    timestamps: true
});

const Shortage = mongoose.model('Shortage', shortageSchema);

module.exports = Shortage;