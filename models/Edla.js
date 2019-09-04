const mongoose = require('mongoose');


const eDLASchema = new mongoose.Schema({
    delay: {
        type: String,
        enum:['External-Pending PO/Customer Authorization', 'External-Supplier Late', 'External-Supplier Quality-Material Defect',
        'External-Supplier Quality-Paperwork', 'Internal-Critical Equipment is Down', 'Internal-Demand Spike', 'Internal-Financial Hold',
        'Internal-Inventory Error', 'Internal-Kanban Program Issue', 'Internal-Late PO/PO Not Sent', 'Internal-Late Requisition/Work Order',
        'Internal-Manufacturing Capacity Issues', 'Internal-Meggitt Supplied Parts Not Shipped to Supplier',
        'Internal-On Dock/Not Received In', 'Internal-On Schedule', 'Internal-Pull-in Order', 'Internal-Quality hold/Stop Ship',
        'Internal-Repair/Replace', 'Internal-Sales Order Less-Than LT', 'Internal-Scrap', 'Internal-Troubleshooting'],
        required: true
    },
    commit_date: {
        type: Date,
        required: true
    },
    comment:{
      type: String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sd003'
    }
},{
    timestamps: true
});

const Edla = mongoose.model('Edla', eDLASchema);

module.exports = Edla;