// import React from 'react'
import PropTypes from 'prop-types'


function Student(props) {
  return (
    <div className="student">
      <p>Name :{props,name}</p>
      <p>Age :{propsage}</p>
      <p>Student :{props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Student
