import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) => {

    //console.log(alerts);

    if (alerts !== undefined) {
        if (alerts !== null && alerts.length > 0) {
            return (
                alerts.map(alert => (
                    <div key={alert.id} className={`${alert.alertType}`}>
                        {alert.msg}
                    </div>
                ))
            );
        }
        
        else {
            
            return null;
        }
        
    }
    else {
        return <p>It's undefined</p>;
    }
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
