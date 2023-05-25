import React from 'react'

const BotonNormalSecundario = (props) => {

  return (
        <button className='BotonNormalSecundario' style={{backgroundColor: props.bgColor}}>{props.content}</button>
  )
}

export default BotonNormalSecundario