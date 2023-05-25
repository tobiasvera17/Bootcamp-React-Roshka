import React from 'react'

const BotonVacio = (props) => {

  return (
        <button className='BotonVacio' style={{color:props.color, backgroundColor: props.bgColor, textDecoration:props.textDecoration}}>{props.content}</button>
  )
}

export default BotonVacio