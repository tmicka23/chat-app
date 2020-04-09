import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


// const Contact = ({name, avatar, online}) => {

//   return (
//     <div className="Contact">
//       <img src={avatar} alt={name} className="avatar"/>
//       <div>
//         <h6 className="name">
//           {name}
//         </h6>
//         <div className="status">
//         <span className={online ? "status-online" : "status-offline"}></span>
//           <span className="status-text">{online ? 'online' : 'offline'}</span>
//         </div>
//       </div>
//     </div>
//   )
// }


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      online : props.online
    }
  }

  handleStatus = (event) => {
    const newStatus = this.state.online ? false : true
    this.setState({online: newStatus})
  }

  render() {
    return (
      <div className="Contact">
       <img src={this.props.avatar} alt={this.props.name} className="avatar"/>
       <div>
         <h6 className="name">
           {this.props.name}
         </h6>
         <div className="status" id="statusContainer" onClick={this.handleStatus}>
         <span className={this.state.online ? "status-online" : "status-offline"}></span>
           <span className="status-text">{this.state.online ? 'online' : 'offline'}</span>
         </div>
       </div>
     </div>
    )
  }
}






Contact.propTypes = {
  online: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Contact