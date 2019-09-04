const sd029AllowedUpdates = ["part_number", "invc_dt", "so_num", "so_ln", "so_typ", "qty", "lc_tp", "matlGrp", "invc_num",
    "part_description", "lc_up", "dest_regn", "ship_to_name", "ship_to_num", "dest_ctry", "dc", "sdv", "cg", "mdv",
    "mg1", "mg5", "ph1", "ph2", "ph3", "ph4", "ph5", "ph4_desc", "sold_to_name", "customer_number", "invdt_fiscyp",
    "suom", "lc_tc", "lc_uc", "lc_gm_amt", "gm_percent", "lcurr", "exch_rt", "dcurr", "dc_tp", "dc_up", "dc_tc",
    "dc_uc", "dc_gm_amt", "sofc", "cust_matl_num", "profit_ctr", "mrp_contr", "mrp_contr_nm", "proctyp",
    "mrp_grp", "cust_po", "cust_po_date", "uommul", "uomdiv", "buom", "sls_mgr_num", "sls_mgr_nm", "emp_resp_number",
    "emp_resp_nm", "cust_grp1", "cust_grp_1_desc", "sold_ctry", "dlvprio", "ext_agt_number", "ext_agt_nm",
    "end_usr_number", "end_usr_nm", "end_usr_ctry", "sldv", "invc_yr", "wbs", "mlstn", "ph6", "ha00", "yk08",
    "slcrtdt", "cust_grp_desc", "prodschd", "ship_to_zc", "so_incot_1", "so_inco_desc", "so_incot_2", "so_payt",
    "so_payt_desc", "del_num", "invc_typ", "ord_resn", "ord_resn_desc", "invoice_text", "ship_to_ctry", "bill_to_num",
    "bill_to_name", "primcontrno", "cascvd", "tina", "gup", "gup_name", "sales_org", "plant", "bill_to_country"];

const budgetAllowedUpdates = [ "budget_type", "site", "date", "trade_ico", "oem_spare", "amount"];
const edlaAllowedUpdates = ['delay', 'commit_date', 'comment'];
module.exports = {sd029AllowedUpdates, budgetAllowedUpdates, edlaAllowedUpdates};