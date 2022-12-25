import React from 'react'
import Update from '../Update/Update'
import './RightSide.css'
const RightSide = () => {
  return (
    <div className="right-side">
      <div>
        <h3>Update</h3>
        <Update/>
      </div>
      <div>
        <h3>Customer Review</h3>
      </div>
    </div>
  )
}

export default RightSide