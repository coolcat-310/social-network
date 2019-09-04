const mongoose = require('mongoose');

/**
 * Material as describe to have to the following attributes: firstname, lastname, product_line, part_number,
 * description, revenue_impact, open_date, need_data, estimate_date, active_shortage, supplier, issue_category,
 * customer, sales_order_number, comments.
 */
const materialSchema = new mongoose.Schema({
    first_name:{
       type: String,
       required: true
    },
    last_name:{
       type: String,
       required: true
    },
    product_line:{
        type: String,
        enum: ['firex', 'hpvv', 'controls', 'restraints', 'accessories', 'gauges'],
        required: true
    },
    part_number:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    revenue_impact:{
        type: String,
        enum: ['Low (<=$50,000)', 'Medium (<=$150,000)', 'High (>$150,000)']
    },
    open_date:{
        type: Date
    },
    need_date:{
        type: Date
    },
    estimate_date:{
        type: Date
    },
    active_shortage:{
        type: Boolean
    },
    supplier:{
        type: String,
        required: true
    },
    issue_category:{
        type: String,
        enum: ['Internal-Late Requisition/Work Order', 'Internal-Meggitt supplied parts not shipped to supplier',
            'Internal-On Dock/Not Received In','Internal-Pull-in Order','Internal-Repair/Replace','Internal-Sales Order < LT',
            'Internal-Scrap','Internal-Received On Time, In Inspection', 'Supplier Late', 'Supplier Quality-Material Defect',
            'Supplier Quality-Paperwork'],
        required: true
    },
    customer:{
        type: String,
        required: true
    },
    sales_order_number:{
        type: String,
        required: true
    },
    comments: {
        type: String
    }

},{
    timestamps: true
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;