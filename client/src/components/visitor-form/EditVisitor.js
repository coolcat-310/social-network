import React, {Fragment, useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateVisitor } from "../../actions/visitors";


const EditVisitor = ({ visitors: {visitors, loading}, updateVisitor, match, history}) =>{
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        customer_program: '',
        attendees: '',
        meeting_location: '',
        start_date: '',
        end_date: '',
        purpose: ''
    });

    const timeConversion = time =>{
        return time.split('T')[0]
    };

    useEffect(() =>{
        let vit = visitors.filter(visitor => visitor._id === match.params.id)[0];

       setFormData({
           name                 : loading || !vit.name ?  '' : vit.name,
           type                 : loading || !vit.type ? '' : vit.type,
           customer_program     : loading || !vit.customer_program ? '' : vit.customer_program,
           attendees            : loading || !vit.attendees ? '' : vit.attendees,
           meeting_location     : loading || !vit.meeting_location ? '' : vit.meeting_location,
           start_date           : loading || !vit.start_date ? '' : timeConversion(vit.start_date),
           end_date             : loading || !vit.end_date ? '' : timeConversion(vit.end_date),
           purpose              : loading || !vit.purpose ? '' : vit.purpose
       });
    },[setFormData, match.params.id, visitors, loading]);

    const { name, type, customer_program, attendees, meeting_location, start_date, end_date, purpose } = formData;

    // update form on change
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    // const onSubmit = e =>{
    //     e.preventDefault();
    //     updateVisitor(formData, match.params.id, history);
    // };

    return (
            <Fragment>
                <h1 className="large text-primary">
                    Edit Visitor's Information
                </h1>
                <small>* = required field</small>
                <form className="form" onSubmit={e =>{
                    e.preventDefault();
                    updateVisitor(formData, match.params.id, history);
                }}>
                    <div className="form-group">
                        <input type="text" placeholder="name" name="name" value={name} onChange={e=>onChange(e)}/>
                    </div>
                    <div className="form-group">
                        <select name="type" value={type} onChange={e=>onChange(e)}>
                            <option value="Customer Visit">Customer Visit</option>
                            <option value="Divisional Visit">Divisional Visit</option>
                            <option value="Government Visit">Government Visit</option>
                            <option value="Offsite-Visiting Customer">Offsite-Visiting Customer</option>
                            <option value="PLC Visit">PLC Visit</option>
                            <option value="Supplier Visit">Supplier Visit</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               placeholder="* Customer Program"
                               name="customer_program" value={customer_program} onChange={e=>onChange(e)} required/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               placeholder="* Attendees"
                               name="attendees" value={attendees} onChange={e=>onChange(e)} required/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               placeholder="* Meeting Location"
                               name="meeting_location" value={meeting_location} onChange={e=>onChange(e)} required/>
                    </div>
                    <div className="form-group">
                        <h4>Start Date</h4>
                        <input type="date" name="start_date" value={start_date}
                               onChange={e=>onChange(e)} />
                    </div>
                    <div className="form-group">
                        <h4>End Date</h4>
                        <input type="date" name="end_date" value={end_date}
                               onChange={e=>onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               placeholder="* Purpose"
                               name="purpose" value={purpose} onChange={e=>onChange(e)} required/>
                    </div>
                    <input type="submit" className="btn btn-primary my-1"/>
                    <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
                </form>
            </Fragment>
    )
};

EditVisitor.propTypes = {
    visitors: PropTypes.object.isRequired,
    updateVisitor: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    visitors: state.visitors
});

export default connect(mapStateToProps, { updateVisitor })(withRouter(EditVisitor));