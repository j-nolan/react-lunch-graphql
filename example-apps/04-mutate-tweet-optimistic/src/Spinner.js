import React from 'react'
import SpinnerSVG from './Spinner.svg'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <img src={SpinnerSVG} alt="Loading..." />
    </div>
  )
}

export default Spinner
