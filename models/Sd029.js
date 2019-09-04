const mongoose = require('mongoose');

const sd029Schema = new mongoose.Schema({
    part_number:{
        type: String
    },
    invc_dt:{ //invoice_date
        type: Date
    },
    so_num:{ //so # || sales_order
        type: Number
    },
    so_ln:{ //so_line
        type: Number
    },
    so_typ:{ // sales_order_type
        type: String
    },
    qty:{ //quantity
        type: Number
    },
    lc_tp:{ //lc_extended_price
        type: Number
    },
    matlGrp:{ // material_group
        type: String
    },
    invc_num:{ //Invc # || invoice_number
        type: Number
    },
    part_description:{
        type: String
    },
    lc_up:{ // lc_unit_price
        type: Number
    },
    dest_regn:{ // destination _region
        type: String
    },
    ship_to_name:{ //ship_to_name
        type: String
    },
    ship_to_num:{
        type: Number
    },
    dest_ctry:{ //destination_country
        type: String
    },
    dc:{ // distribution_channel
        type: Number
    },
    sdv:{
        type: Number
    },
    cg:{
        type: String
    },
    mdv:{
        type: Number
    },
    mg1:{
        type: String
    },
    mg5:{
        type: String
    },
    ph1:{ //product_hierarchy_1
        type: String
    },
    ph2:{ //product_hierarchy_2
        type: String
    },
    ph3:{ //product_hierarchy_3
        type: String
    },
    ph4:{ //product_hierarchy_4
        type: String
    },
    ph5:{  //product_hierarchy_5
        type: String
    },
    ph4_desc:{ // product_hierarchy_4_description
        type: String
    },
    sold_to_name:{
        type: String
    },
    customer_number:{ //customer #
        type: String
    },
    invdt_fiscyp:{ //InvDt FiscYP || invoice_date_fiscal_yp
        type: Number
    },
    suom:{
        type: String
    },
    lc_tc:{ // lc_extended_cost
        type: Number
    },
    lc_uc: { // lc_unit_cost
        type: Number
    },
    lc_gm_amt:{ // lc_gross_margin_amount
        type: Number
    },
    gm_percent:{ // GM % || gross_margin_percent
        type: Number
    },
    lcurr:{ // local_currency
        type: String
    },
    exch_rt:{ // exchange_rate
        type: Number
    },
    dcurr:{ // document_currency
        type: String
    },
    dc_tp:{ // dc_extended_price
        type: Number
    },
    dc_up:{ //dc_unit_price
        type: Number
    },
    dc_tc:{ //dc_extended_cost
        type: Number
    },
    dc_uc:{ // dc_unit_cost
        type: Number
    },
    dc_gm_amt:{ // dc_gross_margin_amount
        type: Number
    },
    sofc:{
        type: String
    },
    cust_matl_num:{ // customer_material_number
        type: String
    },
    profit_ctr:{ // profit_center
        type: Number
    },
    mrp_contr:{ // mrp_controller
        type: String
    },
    mrp_contr_nm:{ // mrp_controller_name
        type: String
    },
    proctyp:{ // proc_type
        type: String
    },
    mrp_grp:{ // mrp_group
        type: String
    },
    cust_po:{ // customer_po_number
        type: String
    },
    cust_po_date:{ //customer_po_date
        type: Date
    },
    uommul:{ // uom_numerator
        type: Number
    },
    uomdiv:{ // uom_denominator
        type: Number
    },
    buom: { // buom
        type: String
    },
    sls_mgr_num:{ // sls Mrg # || sales_manager_number
        type: Number
    },
    sls_mgr_nm:{ // sales_manager_name
        type: String
    },
    emp_resp_number:{ // emp_resp_number
        type: Number
    },
    emp_resp_nm:{ //emp_resp_name
        type: String
    },
    cust_grp1:{ // customer_group_1
        type: String
    },
    cust_grp_1_desc:{ // customer_group_1_description
        type: String
    },
    sold_ctry:{ //sold_country
        type: String
    },
    dlvprio:{ // delivery_priority
        type: Number
    },
    ext_agt_number:{ // ext_agt_number
        type: String
    },
    ext_agt_nm:{ //ext_agt_name
        type: String
    },
    end_usr_number: { // End Usr #
        type: Number
    },
    end_usr_nm:{ // end Usr Nm
        type: String
    },
    end_usr_ctry:{ // end_user_country
        type: String
    },
    sldv:{
        type: String
    },
    invc_yr:{ // invoice_year
        type: Number
    },
    wbs: {
        type: String
    },
    mlstn:{
        type: Number
    },
    ph6:{ // product_hierarchy_6
        type: Number
    },
    ha00: { //HA00
        type: Number
    },
    yk08:{ //YK08
        type: Number
    },
    yfrt:{ //YFRT
        type: Number
    },
    slcrtdt: { //so_line_creation_date
        type: Date
    },
    cust_grp_desc: { // customer_group_description
        type: String
    },
    prodschd:{  //prod_schedule
        type: String
    },
    ship_to_zc:{ // shipto zipcode || postal_code
        type: String
    },
    so_incot_1:{
        type: String
    },
    so_inco_desc: { // so_inco_description
        type: String
    },
    so_incot_2:{ //so_inco_t_2
        type: String
    },
    so_payt:{ // so_pay_term
        type: String
    },
    so_payt_desc:{ // so_pay_term_description
        type: String
    },
    del_num:{ //delivery_number
        type: Number
    },
    invc_typ:{ //invoice_type
        type: String
    },
    ord_resn:{
        type: String
    },
    ord_resn_desc:{ //ord_resn_description
        type: String
    },
    invoice_text:{ // Invoice Text
        type: String
    },
    ship_to_ctry:{ //ship_to_country
        type: String
    },
    bill_to_num:{
        type: String
    },
    bill_to_name:{
        type: String
    },
    bill_to_country:{
        type: String
    },
    primcontrno:{ // prime_contract_number
        type: String
    },
    cascvd:{ // cas_covered
        type: String
    },
    tina:{
        type: String
    },
    gup:{ //global_ultimate_parent
        type: String
    },
    gup_name:{ //global_ultimate_parent_name
        type: String
    },
    sales_org:{ // sales_organization
        type: Number
    },
    plant:{
        type: Number
    }
});

const Sd029 = mongoose.model('Sd029', sd029Schema);

module.exports = Sd029;