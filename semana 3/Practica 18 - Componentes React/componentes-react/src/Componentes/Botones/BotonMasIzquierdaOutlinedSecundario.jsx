import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasIzquierdaOutlinedSecundario = (props) => {
  return (
        <button className='BotonOutlinedSecundario' style={{backgroundColor: props.bgColor}}><AddIcon fontSize="small"/>{props.content}</button>
    )
}

export default BotonMasIzquierdaOutlinedSecundario