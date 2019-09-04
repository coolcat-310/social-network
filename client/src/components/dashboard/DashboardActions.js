import React from 'react';
import { Link } from "react-router-dom";


const DashboardActions = () =>{
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" className="btn btn-light">
                <i className="fas fa-user-circle text-primary"/> Edit Profile
            </Link>
            <Link to="/add-experience" className="btn btn-light">
                <i className="fab fa-black-tie text-primary"/> Add Experience
            </Link>
            <Link to="/add-education" className="btn btn-light">
                <i className="fas fa-graduation-cap text-primary"/> Add Education
            </Link>
            <Link to="/add-visitor" className="btn btn-light">
                <i className="fas fa-users text-primary"/> Add Visitor
            </Link>
            <Link to="/add-training" className="btn btn-light">
                <i className="fas fa-chalkboard text-primary"/> Add Training
            </Link>
            <Link to="/metrics" className="btn btn-light">
                <i className="fas fa-computer text-primary"/> Metrics
            </Link>
        </div>
    )
};

export default DashboardActions;