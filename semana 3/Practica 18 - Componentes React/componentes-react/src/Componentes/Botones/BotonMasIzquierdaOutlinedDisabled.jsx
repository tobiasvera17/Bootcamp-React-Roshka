import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasIzquierdaOutlinedDisabled = (props) => {
  return (
        <button className='BotonOutlinedDisabled' style={{backgroundColor: props.bgColor}}><AddIcon fontSize="small"/>{props.content}</button>
    )
}

export default BotonMasIzquierdaOutlinedDisabled