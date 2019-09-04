const React = require('react');

const Spinner = props =>{
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
};

// IN case the message prop is not passed then text 'Loading ...' will display
Spinner.defaultProps = {
    message: "Loading ..."
};

module.exports = Spinner;