import React from 'react'

const BotonNormal = (props) => {

  return (
        <button className='BotonNormal' style={{backgroundColor: props.bgColor}}>{props.content}</button>
  )
}

export default BotonNormal