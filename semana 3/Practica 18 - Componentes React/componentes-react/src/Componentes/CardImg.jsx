import React from 'react'

const CardImg = (props) => {
  return (
    <div className='img-card-container container text-left p-0 mb-2'>
            <img className="img-fluid rounded" src={props.imgSrc}/>
    </div>
  )
}

export default CardImg