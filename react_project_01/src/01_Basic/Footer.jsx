// import React from 'react'

function Footer() {
    const timeNow = new Date().toLocaleDateString()
  return (
    <>
    <footer>
        <p> &copy; At {timeNow} You create Your First React Website</p>
    </footer>
    </>
  )
}

export default Footer
