import React from 'react'
import BotonNormal from './Botones/BotonNormal'
const Banner = (props) => {
  return (
    <div className='banner-container'>
        <div className='title-container-banner'>
            <h1 className='title'>{props.title}</h1>
        </div>
        <div className='body-container-banner'>
            <div className='text-container-banner'>
                <p className='text-banner'>{props.text}</p>
            </div>
            <div className='button-container-banner'>
                <BotonNormal content="GET STARTED" bgColor="springgreen"/>
            </div>
        </div>
    </div>
  )
}

export default Banner