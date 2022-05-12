import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='spinner-container'>
        <span className='spinner-border m-5' role={"status"}></span>
    </div>
  )
}
export default Loader