import React from 'react'

const CardButtons = (props) => {
  return (
    <div className='buttons-card-container container mb-2 p-0'>
        {
        props.buttons.map((item, index) => {
            return (
                <button type='button' style={{marginRight:'5px'}}className='btn btn-secondary p-1'>{item}</button>
            )
        })
        }
    </div>
  )
}

export default CardButtons