import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { updateTraining } from "../../actions/trainingActions";

const EditTraining = ({ trainings: {trainings, loading}, match, history, updateTraining }) =>{

    const [formData, setFormData] = useState({
        course_title: '',
        training_type: '',
        date: '',
        number_of_session: '',
        hours_per_class: '',
        employee_population: ''
    });

    const timeConversion = time =>{
        return time.split('T')[0]
    };

    useEffect(()=>{
       let tr = trainings.filter(training => training._id === match.params.id)[0];

       setFormData({
           course_title         : loading || !tr.course_title ? '' : tr.course_title,
           training_type        : loading || !tr.training_type ? '' : tr.training_type,
           date                 : loading || !tr.date ? '' : timeConversion(tr.date),
           number_of_session    : loading || !tr.number_of_session ? '' : tr.number_of_session,
           hours_per_class      : loading || !tr.hours_per_class ? '' : tr.hours_per_class,
           employee_population  : loading || !tr.employee_population ? '' : tr.employee_population
       });
    }, [setFormData, loading, match.params.id, trainings]);

    const { course_title, training_type, date, number_of_session, hours_per_class, employee_population } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        updateTraining(formData, match.params.id, history);
    };

    return (
        <Fragment>
            <div className="ui raised very padded text container segment">
                <h1 className="large text-primary">
                    Edit Training Information
                </h1>
                <small style={{color: 'rgb(219,102,172)'}}> * = required field</small>
                <form className="ui form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <div className="required field">
                            <label>Course Title</label>
                            <input type="text" placeholder="course title" name="course_title"
                                   value={course_title} onChange={e=>onChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="required field">
                            <label>Type of Training</label>
                            <input type="text" placeholder="Type of Training" name="training_type"
                                   value={training_type} onChange={e=>onChange(e)}/>
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
                            <label>Number of Sessions</label>
                            <input type="text" placeholder="# of Sessions" name="number_of_session"
                                   value={number_of_session} onChange={e=>onChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="field">
                            <label>Hours per Class</label>
                            <input type="text" placeholder="# of hours" name="hours_per_class"
                                   value={hours_per_class} onChange={e=>onChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="field">
                            <label>Class Size</label>
                            <input type="text" placeholder="# of students" name="employee_population"
                                   value={employee_population} onChange={e=>onChange(e)}/>
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

EditTraining.propTypes ={
    trainings: PropTypes.object.isRequired,
    updateTraining: PropTypes.func.isRequired
};

const mapStateToProps = state=>({
    trainings: state.trainingReducer
});

export default connect(mapStateToProps, { updateTraining })(withRouter(EditTraining));