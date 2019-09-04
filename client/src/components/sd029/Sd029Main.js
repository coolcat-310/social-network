import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getSd029, getSd029Count } from "../../actions/sd029Actions";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import './sd029Main.css';

const Sd029Main = ({ getSd029, getSd029Count, sd029Reducer: { sd029s, loading, count } }) =>{
    useEffect( ()=>{
        getSd029();
        getSd029Count();
    }, [getSd029, getSd029Count]);

    const sd029JSX = sd029s.map(sd =>(
        <tr key={sd._id}>
            <td>{sd.part_number}</td>
            <td>
                <Moment format='YYYY/MM/DD'>
                    {sd.invc_dt}
                </Moment>
            </td>
            <td>{sd.so_num}</td>
            <td>{sd.so_ln}</td>
            <td>{sd.so_typ}</td>
            <td>{sd.qty}</td>
            <td>{sd.lc_tp}</td>
            <td>{sd.matlGrp}</td>
            <td>{sd.invc_num}</td>
            <td>{sd.part_description}</td>
            <td>{sd.lc_up}</td>
            <td>{sd.dest_regn}</td>
            <td>{sd.ship_to_name}</td>
            <td>{sd.ship_to_num}</td>
            <td>{sd.dest_ctry}</td>
            <td>{sd.dc}</td>
            <td>{sd.sdv}</td>
            <td>{sd.cg}</td>
            <td>{sd.mdv}</td>
            <td>{sd.mg1}</td>
            <td>{sd.mg5}</td>
            <td>{sd.ph1}</td>
            <td>{sd.ph2}</td>
            <td>{sd.ph3}</td>
            <td>{sd.ph4}</td>
            <td>{sd.ph5}</td>
            <td>{sd.ph4_desc}</td>
            <td>{sd.sold_to_name}</td>
            <td>{sd.customer_number}</td>
            <td>{sd.invdt_fiscyp}</td>
            <td>{sd.suom}</td>
            <td>{sd.lc_tc}</td>
            <td>{sd.lc_uc}</td>
            <td>{sd.lc_gm_amt}</td>
            <td>{sd.gm_percent}</td>
            <td>{sd.lcurr}</td>
            <td>{sd.exch_rt}</td>
            <td>{sd.dcurr}</td>
            <td>{sd.dc_tc}</td>
            <td>{sd.dc_up}</td>
            <td>{sd.dc_tc}</td>
            <td>{sd.dc_uc}</td>
            <td>{sd.dc_gm_amt}</td>
            <td>{sd.sofc}</td>
            <td>{sd.cust_matl_num}</td>
            <td>{sd.profit_ctr}</td>
            <td>{sd.mrp_contr}</td>
            <td>{sd.mrp_contr_nm}</td>
            <td>{sd.proctyp}</td>
            <td>{sd.mrp_grp}</td>
            <td>{sd.cust_po}</td>
            <td><Moment format='YYYY/MM/DD'>{sd.cust_po_date}</Moment></td>
            <td>{sd.uommul}</td>
            <td>{sd.uomdiv}</td>
            <td>{sd.buom}</td>
            <td>{sd.sls_mgr_num}</td>
            <td>{sd.sls_mgr_nm}</td>
            <td>{sd.emp_resp_number}</td>
            <td>{sd.emp_resp_nm}</td>
            <td>{sd.cust_grp1}</td>
            <td>{sd.cust_grp_1_desc}</td>
            <td>{sd.sold_ctry}</td>
            <td>{sd.dlvprio}</td>
            <td>{sd.ext_agt_number}</td>
            <td>{sd.ext_agt_nm}</td>
            <td>{sd.end_usr_number}</td>
            <td>{sd.end_usr_nm}</td>
            <td>{sd.end_usr_ctry}</td>
            <td>{sd.sldv}</td>
            <td>{sd.invc_yr}</td>
            <td>{sd.wbs}</td>
            <td>{sd.mlstn}</td>
            <td>{sd.ph6}</td>
            <td>{sd.ha00}</td>
            <td>{sd.yk08}</td>
            <td>{sd.yfrt}</td>
            <td><Moment format='YYYY/MM/DD'>{sd.slcrtdt}</Moment></td>
            <td>{sd.cust_grp_desc}</td>
            <td>{sd.prodschd}</td>
            <td>{sd.ship_to_zc}</td>
            <td>{sd.incot_1}</td>
            <td>{sd.so_inco_desc}</td>
            <td>{sd.so_incot_2}</td>
            <td>{sd.so_payt}</td>
            <td>{sd.so_payt_desc}</td>
            <td>{sd.del_num}</td>
            <td>{sd.invc_typ}</td>
            <td>{sd.ord_resn}</td>
            <td>{sd.ord_resn_desc}</td>
            <td>{sd.invoice_text}</td>
            <td>{sd.ship_to_ctry}</td>
            <td>{sd.bill_to_num}</td>
            <td>{sd.bill_to_name}</td>
            <td>{sd.bill_to_contry}</td>
            <td>{sd.primcontrno}</td>
            <td>{sd.cascvd}</td>
            <td>{sd.tina}</td>
            <td>{sd.gup}</td>
            <td>{sd.gup_name}</td>
            <td>{sd.sales_org}</td>
            <td>{sd.plant}</td>
        </tr>
    ));

    const retrieveSD = (e, i) =>{
        const skip = i * 10;
        getSd029(skip);
    };

    const generateButtons = () => {
        let jsx = [];
        const limit = Math.ceil( count / 10 );

        if (limit < 10) {
            for (let i = 0; i < limit; i++) {
                jsx.push( <a key={i} className="active item" onClick={e => retrieveSD( e, i )}> {i + 1}</a> )
            }
            return jsx;
        }

        // want to show first three and last three
        for (let i = 0; i< 3; i++){
            jsx.push( <a key={i} className="active item" onClick={e => retrieveSD( e, i )}> {i + 1}</a>)
        }

        jsx.push( <div key={'blank'} className="disabled item">...</div>);

        for(let i = limit - 3; i < limit; i++){
            jsx.push( <a key={i} className="active item" onClick={e => retrieveSD( e, i )}> {i + 1}</a>)
        }

        return jsx
    };

    let pagination = (
        <div className="ui pagination menu">
            {generateButtons()}
        </div>
    );

    return loading ? <Spinner />:
        <Fragment>
            <h1 className="large text-primary">SD029</h1>

            <div className="wrapper">
            <table className="ui striped table">
                <thead>
                <tr>
                    <th>Part Number</th>
                    <th>Invoice Date</th>
                    <th>Sales Order</th>
                    <th>Sales Order Line</th>
                    <th>Sales Order Type</th>
                    <th>Quantity</th>
                    <th>LC Extended Price</th>
                    <th>Material Group</th>
                    <th>Invoice Number</th>
                    <th>Part Description</th>
                    <th>LC Unit Price</th>
                    <th>Destination Region</th>
                    <th>Ship to Name</th>
                    <th>Ship to Number</th>
                    <th>Destination Country</th>
                    <th>Distribution Channel</th>
                    <th>sdv</th>
                    <th>cg</th>
                    <th>mdv</th>
                    <th>mg1</th>
                    <th>mg5</th>
                    <th>Product Hierarchy 1</th>
                    <th>Product Hierarchy 2</th>
                    <th>Product Hierarchy 3</th>
                    <th>Product Hierarchy 4</th>
                    <th>Product Hierarchy 5</th>
                    <th>Product Hierarchy 4 Description</th>
                    <th>Sold to Name</th>
                    <th>Customer Number</th>
                    <th>Invoice Date Fiscal Year</th>
                    <th>Suom</th>
                    <th>LC Extended Cost</th>
                    <th>LC Unit Cost</th>
                    <th>LC Gross Margin Amount</th>
                    <th>Gross Margin Percent</th>
                    <th>Local Currency</th>
                    <th>Exchange Rate</th>
                    <th>Document Currency</th>
                    <th>DC Extended Price</th>
                    <th>DC Unit Price</th>
                    <th>DC Extended Cost</th>
                    <th>DC Unit Cost</th>
                    <th>DC Gross Margin Amount</th>
                    <th>SOFC</th>
                    <th>Customer Material Number</th>
                    <th>Profit Center</th>
                    <th>MRP Controller</th>
                    <th>MRP Controller Name</th>
                    <th>Proc Type</th>
                    <th>MRP Group</th>
                    <th>Customer PO Number</th>
                    <th>Customer PO Date</th>
                    <th>UOM Numerator</th>
                    <th>UOM Denominator</th>
                    <th>BUOM</th>
                    <th>Sales Manager Number</th>
                    <th>Sales Manager Name</th>
                    <th>Emp Resp Number</th>
                    <th>Emp Resp Name</th>
                    <th>Customer Group 1</th>
                    <th>Customer Group 1 Description</th>
                    <th>Sold Country</th>
                    <th>Delivery Priority</th>
                    <th>Ext Agt Number</th>
                    <th>Ext Agt Name</th>
                    <th>End User Number</th>
                    <th>End User Name</th>
                    <th>End User Country</th>
                    <th>SLDV</th>
                    <th>Invoice Year</th>
                    <th>WBS</th>
                    <th>Mlstn</th>
                    <th>Product Hierarchy 6</th>
                    <th>HA00</th>
                    <th>YK08</th>
                    <th>YFRT</th>
                    <th>SO Line Creation Date</th>
                    <th>Customer Group Description</th>
                    <th>Production Schedule</th>
                    <th>Postal Code</th>
                    <th>SO Incot 1</th>
                    <th>SO Inco Description</th>
                    <th>SO Incot 2</th>
                    <th>SO Pay Term</th>
                    <th>SO Pay Term Description</th>
                    <th>Delivery Number</th>
                    <th>Invoice Type</th>
                    <th>Ord Resn</th>
                    <th>Ord Resn Description</th>
                    <th>Invoice Text</th>
                    <th>Ship to Country</th>
                    <th>Bill to Num</th>
                    <th>Bill to Name</th>
                    <th>Bill to Country</th>
                    <th>Prime Contract Number</th>
                    <th>CAS Covered</th>
                    <th>Tina</th>
                    <th>Global Ultimate Parent</th>
                    <th>GUP Name</th>
                    <th>Sales Organization</th>
                    <th>Plant</th>
                </tr>
                </thead>
                <tbody>
                {sd029JSX}
                </tbody>
            </table>
            </div>
            {pagination}
            <div>
                <Link className="btn btn-light my-1" to="/metrics">Go Back</Link>
            </div>
        </Fragment>
};

Sd029Main.propTypes ={
    getSd029: PropTypes.func.isRequired,
    getSd029Count: PropTypes.func.isRequired,
    sd029Reducer: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
   sd029Reducer: state.sd029Reducer
});

export default connect(mapStateToProps, { getSd029, getSd029Count })(Sd029Main);