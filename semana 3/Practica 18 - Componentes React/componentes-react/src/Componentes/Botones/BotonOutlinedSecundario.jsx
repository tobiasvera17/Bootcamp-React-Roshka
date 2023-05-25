import React from 'react'

const BotonOutlinedSecundario = (props) => {

  return (
        <button className='BotonOutlinedSecundario' style={{backgroundColor: props.bgColor}}>{props.content}</button>
  )
}

export default BotonOutlinedSecundario