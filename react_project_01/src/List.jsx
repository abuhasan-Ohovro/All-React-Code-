// import React from 'react'

function List() {
    const fruits = ["apple","orange","banana","coconut","pineapple","Guava"]
    const listItem = fruits.map((fruit) => <li key={fruit}>{fruit}</li>)
  return (
    <ul>{listItem}</ul>
    
  )
}

export default List
