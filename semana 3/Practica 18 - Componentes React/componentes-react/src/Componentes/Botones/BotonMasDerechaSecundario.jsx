import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasDerechaSecundario = (props) => {
  return (
    <button className='BotonNormalSecundario' style={{backgroundColor: props.bgColor}}>{props.content}<AddIcon fontSize="small"/></button>
    )
}

export default BotonMasDerechaSecundario