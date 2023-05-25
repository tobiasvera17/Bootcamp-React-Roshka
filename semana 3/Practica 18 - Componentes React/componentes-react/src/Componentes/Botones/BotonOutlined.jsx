import React from 'react'

const BotonOutlined = (props) => {

  return (
        <button className='BotonOutlined' style={{backgroundColor: props.bgColor}}>{props.content}</button>
  )
}

export default BotonOutlined