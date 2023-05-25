import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasIzquierdaDisabled = (props) => {
  return (
    <button className='BotonNormalDisabled' style={{backgroundColor: props.bgColor}}><AddIcon fontSize="small"/>{props.content}</button>
  )
}

export default BotonMasIzquierdaDisabled