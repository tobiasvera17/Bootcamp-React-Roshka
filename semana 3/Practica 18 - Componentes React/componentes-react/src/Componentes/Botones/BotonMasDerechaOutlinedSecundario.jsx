import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasDerechaOutlinedSecundario = (props) => {
  return (
        <button className='BotonOutlinedSecundario' style={{backgroundColor: props.bgColor}}>{props.content}<AddIcon fontSize="small"/></button>
    )
}

export default BotonMasDerechaOutlinedSecundario