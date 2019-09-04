import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVisitors, deleteVisitor } from "../../actions/visitors";
import Moment from 'react-moment';

const Visitors = ({ getVisitors, deleteVisitor, visitors: {visitors} }) => {

    useEffect(() =>{
        getVisitors();
    }, [getVisitors]);


    const visitorJSX = visitors.map(vit =>(
       <tr key={vit._id}>
           <td>{vit.name}</td>
           <td>{vit.type}</td>
           <td>{vit.meeting_location}</td>
           <td>{vit.purpose}</td>
           <td>
               <Moment format='YYYY/MM/DD'>
                   {vit.start_date}
               </Moment> {'- '}
               <Moment format='YYYY/MM/DD'>
                   {vit.end_date}
               </Moment>
           </td>
           <td>
               <Link className="btn btn-primary" to={`/edit-visitor/${vit._id}`}>
                   <i className="fas fa-edit" />
               </Link>
               <button className="btn btn-danger" onClick={()=> deleteVisitor(vit._id)}>
                   <i className="fas fa-trash-alt" />
               </button>
           </td>
       </tr>
    ));

    return(
        <Fragment>
            <h2 className="my-2">Visitors</h2>
            <table className="ui striped table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Meeting Location</th>
                        <th>Purpose</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {visitorJSX}
                </tbody>
            </table>
        </Fragment>
    )
};

Visitors.propTypes ={
    getVisitors: PropTypes.func.isRequired,
    deleteVisitor: PropTypes.func.isRequired,
    visitors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
   visitors: state.visitors
});

export default connect(mapStateToProps, { getVisitors, deleteVisitor })(Visitors);