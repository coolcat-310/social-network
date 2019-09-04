const mongoose = require('mongoose');
const validator = require('validator');

const returnSchema = new mongoose.Schema({
    rma:{
        type: Number
    },
    admin:{
        type: String
    },
    customer_name:{
        type: String
    },
    contact_name:{
        type: String
    },
    contact_email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Contact Email is Invalid');
            }
        }
    },
    contact_phone:{
        type: String
    },
    order_type:{
        type: String
    },
    po:{
        type: String
    },
    so:{
        type: String
    },
    car:{
        type: String
    },
    govt_property:{
        type: String
    },
    rej_no:{
        type: String
    },
    part_number:{
        type: String
    },
    description:{
        type: String
    },
    pl:{
        type: String
    },
    cust_part:{
        type: String
    },
    contract:{
        type: String
    },
    qty:{
        type: Number
    },
    serial:{
        type: String
    },
    claim_warranty:{
        type: String
    },
    freight_terms:{
        type: String
    },
    shipment_priority:{
        type: String
    },
    packing_instructions:{
        type: String
    },
    shipping_instructions:{
        type: String
    },
    notes:{
        type: String
    },
    reported_discrepancy:{
        type: String
    },
    detention_notes:{
        type: String
    },
    days_in_detention:{
        type: String
    },
    arrived_with_rma:{
        type: String
    },
    package_condition:{
        type: String
    },
    overall_condition:{
        type: String
    },
    tamper_seals_intact:{
        type: String
    },
    condition_comments:{
        type: String
    },
    defect_code:{
        type: String
    },
    escape:{
        type: String
    },
    repetitive:{
        type: String
    },
    stop_issue:{
        type: String
    },
    internal_car:{
        type: String
    },
    warranty:{
        type: String
    },
    rework_level:{
        type: String
    },
    fa_comments:{
        type: String
    },
    disposition: {
        type: String
    },
    op_no:{
        type: String
    },
    location:{
        type: String
    },
    stamp:{
        type: String
    },
    completed:{
        type: String
    },
    rework_instructions:{
        type: String
    },
    status:{
        type: String
    },
    date_created:{
        type: Date,
        default: Date.now
    },
    date_received:{
        type: Date
    },
    date_evaluated:{
        type: Date
    },
    date_confirmed:{
        type: Date
    },
    date_shipped:{
        type: Date
    },
    date_cancelled:{
        type: Date
    },
    cancel_comm:{
        type: String
    },
    the_link:{
        type: String
    },
    ship_quantity:{
        type: Number
    },
    dt_date:{
        type: Date
    },
    dt_amount:{
        type: String
    },
    dt_check_no:{
        type: String
    },
    date_modified:{
        type: Date
    },
    modified_by:{
        type: String
    }

});

const Return = mongoose.model('Return', returnSchema);

module.exports = Return;