const mongoose = require('mongoose');
const Edla = require('./eDLA');

const sd003Schema = new mongoose.Schema({
    sales_order: {
        type: Number,
        min: 0
    },
    so_line: {
        type: Number,
        min: 0
    },
    sl_number: {
        type: Number,
        min: 0
    },
    customer_number:{
        type: String
    },
    customer_name:{
        type: String
    },
    part_number: {
        type: String
    },
    material_description_so: {
        type: String
    },
    suom:{
        type: String
    },
    ship_number:{
        type: String
    },
    customer_po_number: {
        type: String
    },
    po_line: {
        type: String
    },
    quantity_balance:{
        type: Number
    },
    request_date:{
        type: Date
    },
    confirm_date:{
        type: Date
    },
    quantity_on_hand:{
        type: Number,
        min: 0
    },
    lc_extended_price:{
        type: Number
    },
    distribution_channel:{
        type: Number
    },
    sdv:{
        type: Number
    },
    percent_in_stock: {
        type: Number
    },
    add_partner: {
        type: String
    },
    billing_date: {
        type: Date
    },
    buom: {
        type: String
    },
    cas_covered_dassian:{
        type: String
    },
    cg: {
        type: String
    },
    cgi_yr_p: {
        type: Number
    },
    confirm_goods_in_date:{
        type: Date
    },
    cnf_yr_p:{
        type: Number
    },
    crb:{
        type: String
    },
    created_by:{
        type: String
    },
    crm_number:{
        type: String
    },
    cus_pr_gp:{
        type: String
    },
    customer_material_number:{
        type: String
    },
    customer_request_date:{
        type: Date
    },
    db_sd003:{
        type: String
    },
    dbsl: {
        type: String
    },
    document_currency:{
        type: String
    },
    dc_extended_cost:{
        type: Number
    },
    dc_extended_price:{
        type: Number
    },
    dc_gross_margin_amount:{
        type: Number
    },
    dc_total_cost: {
        type: Number
    },
    dc_total_price: {
        type: Number
    },
    dc_unit_cost: {
        type: Number
    },
    dc_unit_price: {
        type: Number
    },
    del_comp_hdr:{
        type: String
    },
    delivery_schedule_date:{
        type: Date
    },
    emp_resp_name:{
        type: String
    },
    emp_resp_number:{
        type: Number
    },
    end_user_number: {
        type: Number
    },
    end_user_country: {
        type: String
    },
    end_user_name:{
        type: String
    },
    exchange_rate:{
        type: Number
    },
    export_compliance_license_missing:{
        type: String
    },
    ext_agt_number: {
        type: Number
    },
    ext_agt_name:{
        type: String
    },
    finish_goods_value:{
        type: Number
    },
    formulated_goods_in_date:{
        type: Date
    },
    first_due_date:{
        type: Date
    },
    gross_margin_percent:{
        type: Number
    },
    goods_movement_status:{
        type: String
    },
    hbb:{
        type: String
    },
    HLIt:{
        type: Number
    },
    it_ct:{
        type: String
    },
    lbb:{
        type: String
    },
    local_currency:{
        type: String
    },
    lc_extended_cost:{
        type: Number
    },
    lc_gross_margin_amount:{
        type: Number
    },
    lc_unit_cost:{
        type: Number
    },
    lc_unit_price:{
        type: Number
    },
    material_available_date:{
        type: Date
    },
    material_description:{
        type: String
    },
    material_group:{
        type: String
    },
    mdv: {
        type: Number
    },
    mg1: {
        type: String
    },
    mg5:{
        type: String
    },
    mrp_controller_name:{
        type: String
    },
    mrp_controller:{
        type: String
    },
    mrp_group:{
        type: String
    },
    notification:{
        type: Number
    },
    or_ct:{
        type: String
    },
    or_rsn:{
        type: String
    },
    ov_st:{
        type: String
    },
    partial_delivery_item:{
        type: String
    },
    so_pay_term: {
        type: String
    },
    product_hierarchy_1: {
        type: String
    },
    product_hierarchy_2: {
        type: String
    },
    product_hierarchy_3: {
        type: String
    },
    product_hierarchy_4: {
        type: String
    },
    product_hierarchy_4_description: {
        type: String
    },
    product_hierarchy_5: {
        type: String
    },
    product_hierarchy_5_description: {
        type: String
    },
    product_hierarchy_6: {
        type: String
    },
    product_hierarchy_6_description: {
        type: String
    },
    plant: {
        type: Number
    },
    po_date:{
        type: Date
    },
    postal_code:{
        type: String
    },
    prod_schedule:{
        type: String
    },
    prime_contract_number_dassian: {
        type: String
    },
    proc_type:{
        type: String
    },
    prod_cd:{
        type: String
    },
    prod_cd_description:{
        type: String
    },
    product_hierarchy:{
        type: String
    },
    profit_center:{
        type: Number
    },
    quantity_ordered:{
        type: Number
    },
    quantity_proc:{
        type: Number
    },
    region:{
        type: String
    },
    requested_goods_in_date:{
        type: Date
    },
    sales_order_type:{
        type: String
    },
    ship_name:{
        type: String
    },
    ship_country:{
        type: String
    },
    sl_conf_quantity:{
        type: Number
    },
    sold_country:{
        type: String
    },
    sl_req_quantity:{
        type: Number
    },
    sales_manager_number:{
        type: Number
    },
    sales_manager_name:{
        type: String
    },
    sofc:{
        type: String
    },
    so_line_creation_date:{
        type: Date
    },
    so_stock:{
        type: Number
    },
    status:{
        type: String
    },
    stock_location:{
        type: String
    },
    tina_dassian:{
        type: String
    },
    uom_denominator:{
        type: Number
    },
    uom_numerator:{
        type: Number
    },
    visual_compliance_check_failed:{
        type: String
    },
    your_reference:{
        type: String
    },
    global_ultimate_parent:{
        type: String
    },
    global_ultimate_parent_name: {
        type: String
    },
    applied_overhead:{
        type: Number
    },
    other_cost:{
        type: Number
    },
    labor:{
        type: Number
    },
    material:{
        type: Number
    },
    overhead:{
        type: Number
    },
    external_activity:{
        type: Number
    },
    sub_contract:{
        type: Number
    }
});

/**
 * Virtual property Used by Edla to reference a SD003 by its _id
 */
sd003Schema.virtual('edla', {
    ref: 'Edla',
    localField: '_id',
    foreignField: 'owner'
});

/**
 * A pre funciton to delete sd003 and all association to its related edlas
 */
sd003Schema.pre('remove', async function(next){
    const sd003 = this;
    await Edla.deleteMany({owner: sd003._id});
    next();
});

const Sd003 = mongoose.model('Sd003', sd003Schema);

module.exports = Sd003;