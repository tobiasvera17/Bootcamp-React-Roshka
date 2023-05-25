import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import BotonNormal from './Botones/BotonNormal';
const Header = (props) => {
  return (
    <div className="header-container">
        <div className='logo-header-container'>
            <img className='img-logo' src='./images/AI-0.jpg'></img>
        </div>
        <div className='buttons-header-container'>
                {
                props.data.map((item, index) => {
                    console.log(item)
                    return <button key={index} className='button-header'>{item}</button>
                })
                }
        </div>
        <div className='login-header-container'>
            <div className='login-header'>
                <PersonIcon/>
                <button className='button-login'>Login</button>
            </div>
            <div className='login-header'>
                <BotonNormal bgColor="white" content="Book a demo" color="dodgerblue"/>
            </div>
        </div>
    </div>
  )
}

export default Header