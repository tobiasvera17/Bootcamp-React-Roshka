import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasDerechaVacio = (props) => {

  return (
        <button className='BotonVacio' style={{color:props.color, backgroundColor: props.bgColor, textDecoration:props.textDecoration}}>{props.content}<AddIcon fontSize='small'/></button>
  )
}

export default BotonMasDerechaVacio