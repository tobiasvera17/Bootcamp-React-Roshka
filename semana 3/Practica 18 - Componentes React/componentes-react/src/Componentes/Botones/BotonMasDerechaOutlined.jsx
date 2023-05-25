import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const BotonMasDerechaOutlined = (props) => {
  return (
        <button className='BotonOutlined' style={{backgroundColor: props.bgColor}}>{props.content}<AddIcon fontSize="small"/></button>
    )
}

export default BotonMasDerechaOutlined