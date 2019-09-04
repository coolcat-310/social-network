import React from 'react';

const MetricSideBar = props =>{
    return(
        <div className="ui bottom demo vertical inverted visible sidebar labeled icon menu">
            <a className="item" >
                <i className="home icon"></i>
                Home
            </a>
            <a className="item">
                <i className="block layout icon"></i>
                Topics
            </a>
            <a className="item">
                <i className="smile icon"></i>
                Friends
            </a>
        </div>
    )
};

export default MetricSideBar;