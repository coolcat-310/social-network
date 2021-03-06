import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
          <div className={`ui ${alert.alertType} message`}>
              <div className="header">{alert.msg}</div>
          </div>
        ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// GET the current state of alert
const mapStateToProps = state =>({
    alerts: state.alert
  }
);

export default connect(mapStateToProps)(Alert);