import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const ButtonMasIzquierdaNormal = (props) => {
  return (
        <button className='BotonNormal' style={{backgroundColor: props.bgColor}}><AddIcon fontSize="small"/>{props.content}</button>
    )
}

export default ButtonMasIzquierdaNormal