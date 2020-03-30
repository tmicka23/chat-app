import React from 'react'
import './Contact.css'

const name = 'Kirk Burke'
const avatar = require('../images/user.jpg')

const Contact = () => {
  return (
    <div className="Contact">
      <img src={avatar} alt={name} className="avatar"/>
      <div>
        <h4 className="name">
          {name}
        </h4>
        <div className="status">
          <span className="status-online"></span>
          <span className="status-text">online</span>
        </div>
      </div>
    </div>
  )
}

export default Contact