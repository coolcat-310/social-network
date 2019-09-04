import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTrainings, deleteTraining } from "../../actions/trainingActions";
import Moment from "react-moment";
import {Link} from "react-router-dom";


const Trainings = ({ getTrainings, deleteTraining, trainings: { loading, trainings} }) =>{
    useEffect(() =>{
        getTrainings();
    }, [getTrainings]);

    const trainingJSX = trainings.map(training =>(
        <tr key={training._id}>
            <td>{training.course_title}</td>
            <td>{training.training_type}</td>
            <td>
                <Moment format='YYYY/MM/DD'>
                    {training.date}
                </Moment>
            </td>
            <td>{training.number_of_session}</td>
            <td>{training.hours_per_class}</td>
            <td>{training.employee_population}</td>
            <td>
                <Link className="btn btn-primary" to={`/edit-training/${training._id}`}>
                    <i className="fas fa-edit" />
                </Link>
            <button className="btn btn-danger" onClick={()=> deleteTraining(training._id)}>
                <i className="fas fa-trash-alt" />
            </button>
            </td>
        </tr>
    ));

    return(
        <Fragment>
            <h2 className="my-2">Training</h2>
            <table className="ui striped table">
                <thead>
                <tr>
                    <th>Course Title</th>
                    <th>Training Type</th>
                    <th>Date</th>
                    <th>Number of Sessions</th>
                    <th>Hours per Class</th>
                    <th>Class Size</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {trainingJSX}
                </tbody>
            </table>
        </Fragment>
    )
};

Trainings.propTypes = {
    getTrainings: PropTypes.func.isRequired,
    deleteTraining: PropTypes.func.isRequired,
    trainings: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    trainings: state.trainingReducer
});

export default connect(mapStateToProps, { getTrainings, deleteTraining })(Trainings);