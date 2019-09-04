import React, { useState, Fragment } from  'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addVisitor } from "../../actions/visitors";


const AddVisitor = ({ addVisitor, history }) =>{
    const [formData, setFormData] = useState({
        name: '', type: '', customer_program: '', attendees: '',
        meeting_location: '', start_date: '', end_date: '', purpose: ''
    });

    const { name, type, customer_program, attendees, meeting_location, start_date, end_date, purpose } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <div className="ui raised very padded text container segment">
                <h1 className="large text-primary">
                    Add new Visitor Information
                </h1>
                <p className="lead">
                    <i className="fas fa-users"/> Intended for on-site visits
                </p>
                <small style={{color: 'rgb(219,102,172)'}}> * = required field</small>
                <form className="ui form" onSubmit={e =>{
                    e.preventDefault();
                    addVisitor(formData, history);
                }}>
                    <div className="form-group">
                        <div className="required field">
                            <label>Name</label>
                            <input type="text"
                                   placeholder="* Name"
                                   name="name" value={name} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Type of Visit</label>
                            <select className="ui fluid dropdown" name="type" value={type} onChange={e=>onChange(e)}>
                                <option value="Customer Visit">Customer Visit</option>
                                <option value="Divisional Visit">Divisional Visit</option>
                                <option value="Government Visit">Government Visit</option>
                                <option value="Offsite-Visiting Customer">Offsite-Visiting Customer</option>
                                <option value="PLC Visit">PLC Visit</option>
                                <option value="Supplier Visit">Supplier Visit</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Customer Program</label>
                            <input type="text"
                                   placeholder="* Customer Program"
                                   name="customer_program" value={customer_program} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Attendees</label>
                            <input type="text"
                                   placeholder="* Attendees"
                                   name="attendees" value={attendees} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Location</label>
                            <input type="text"
                                   placeholder="* Meeting Location"
                                   name="meeting_location" value={meeting_location} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Start Date</label>
                            <input type="date" name="start_date" value={start_date}
                                   onChange={e=>onChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>End Date</label>
                            <input type="date" name="end_date" value={end_date}
                                   onChange={e=>onChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Purpose</label>
                            <input type="text"
                                   placeholder="* Purpose"
                                   name="purpose" value={purpose} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary my-1"/>
                    <Link className='btn btn-light my-1' to='/dashboard'>
                        Go Back
                    </Link>
                </form>
            </div>
        </Fragment>
    )
};

AddVisitor.propTypes = {
    addVisitor: PropTypes.func.isRequired
};

export default connect(null, {addVisitor})(withRouter(AddVisitor));