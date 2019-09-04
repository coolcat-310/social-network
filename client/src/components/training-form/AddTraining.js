import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTraining } from "../../actions/trainingActions";
import {Link, withRouter} from "react-router-dom";


const AddTraining = ({ addTraining, history }) =>{

    const [formData, setFormData] = useState({
        course_title: '',
        training_type: '',
        date: '',
        instructor: '',
        number_of_session: '',
        hours_per_class: '',
        employee_population: ''
    });

    const { course_title, training_type, date, instructor, number_of_session, hours_per_class, employee_population } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    return (
        <Fragment>
            <div className="ui raised very padded text container segment">
                <h1 className="large text-primary">
                    Add new Training Information
                </h1>
                <p className="lead">
                    <i className="fas fa-users"/> Intended for all types of Training
                </p>
                <small style={{color: 'rgb(219,102,172)'}}> * = required field</small>
                <form className="ui form" onSubmit={e =>{
                    e.preventDefault();
                    addTraining(formData, history);
                }}>
                    <div className="form-group">
                        <div className="required field">
                            <label>Title</label>
                            <input type="text"
                                   placeholder="Course title"
                                   name="course_title" value={course_title} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Type</label>
                            <input type="text"
                                   placeholder="Type"
                                   name="training_type" value={training_type} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="field">
                            <label>Instructor</label>
                            <input type="text"
                                   placeholder="Name"
                                   name="instructor" value={instructor} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Date</label>
                            <input type="date" name="date" value={date}
                                   onChange={e=>onChange(e)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="field">
                            <label># of Sessions</label>
                            <input type="text"
                                   placeholder="# of sessions"
                                   name="number_of_session" value={number_of_session} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="field">
                            <label>Hours per Class</label>
                            <input type="text"
                                   placeholder="# of hours"
                                   name="hours_per_class" value={hours_per_class} onChange={e=>onChange(e)} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="field">
                            <label>Class Size</label>
                            <input type="text"
                                   placeholder="# of Students"
                                   name="employee_population" value={employee_population} onChange={e=>onChange(e)} required/>
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

AddTraining.propTypes = {
    addTraining: PropTypes.func.isRequired
};

export default connect(null, { addTraining })(withRouter(AddTraining));