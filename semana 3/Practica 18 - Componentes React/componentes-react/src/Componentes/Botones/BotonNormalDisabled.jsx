import React from 'react'

const BotonNormalDisabled = (props) => {
  return (
    <button className='BotonNormalDisabled' style={{backgroundColor: props.bgColor}}>{props.content}</button>

  )
}

export default BotonNormalDisabled