import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasIzquierdaVacio = (props) => {

  return (
        <button className='BotonVacio' style={{color:props.color, backgroundColor: props.bgColor, textDecoration:props.textDecoration}}><AddIcon fontSize='small'/>{props.content}</button>
  )
}

export default BotonMasIzquierdaVacio