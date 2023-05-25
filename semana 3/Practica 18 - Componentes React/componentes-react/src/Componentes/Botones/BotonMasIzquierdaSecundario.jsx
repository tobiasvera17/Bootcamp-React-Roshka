import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasIzquierdaSecundario = (props) => {
  return (
    <button className='BotonNormalSecundario' style={{backgroundColor: props.bgColor}}><AddIcon fontSize="small"/>{props.content}</button>
    )
}

export default BotonMasIzquierdaSecundario