import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasIzquierdaOutlined = (props) => {
  return (
        <button className='BotonOutlined' style={{backgroundColor: props.bgColor}}><AddIcon fontSize="small"/>{props.content}</button>
    )
}

export default BotonMasIzquierdaOutlined