import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const Contact = ({name, avatar, isOnline}) => {

  return (
    <div className="Contact">
      <img src={avatar} alt={name} className="avatar"/>
      <div>
        <h6 className="name">
          {name}
        </h6>
        <div className="status">
          {isOnline ? <span className="status-online"></span> : <span className="status-offline"></span>}
          <span className="status-text">{isOnline ? 'online' : 'offline'}</span>
        </div>
      </div>
    </div>
  )
}

Contact.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Contact