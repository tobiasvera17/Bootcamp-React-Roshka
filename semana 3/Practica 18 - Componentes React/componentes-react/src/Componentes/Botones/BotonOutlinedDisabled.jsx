import React from 'react'

const BotonOutlinedDisabled = (props) => {

  return (
        <button className='BotonOutlinedDisabled' style={{backgroundColor: props.bgColor}}>{props.content}</button>
  )
}

export default BotonOutlinedDisabled