// import React from 'react'

function UserGreeting(props) {
 const props = new Object();

  if(props.isLoggedIn){
    return <h2>Welcome {props.username}</h2>
  }
}

export default UserGreeting
