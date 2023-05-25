import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasDerechaOutlinedDisabled = (props) => {
  return (
        <button className='BotonOutlinedDisabled' style={{backgroundColor: props.bgColor}}>{props.content}<AddIcon fontSize="small"/></button>
    )
}

export default BotonMasDerechaOutlinedDisabled