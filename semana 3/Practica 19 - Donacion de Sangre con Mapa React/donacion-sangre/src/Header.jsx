import "./style-components.css"
import { Link } from 'react-router-dom'

let data = ["Mapa","Solicitudes","Perfil","Login","Certificados"]
let sites =["/mapa","/solicitudes","/","/login","/"]


const Header = () => {
  return (
    <div className="header-container container-fluid p-0 m-0 d-flex align-items-center justify-content-center">
        <div className='logo-header-container d-flex container-fluid p-0 m-0 align-items-center justify-content-center'>
            <h4>Donación de Sangre ❤</h4>
        </div>
        <div className='buttons-header-container d-flex container-fluid p-0 m-0 align-items-center justify-content-end'>
                {
                data.map((item, index) => {
                    return <Link to={sites[index]} key={index}><button className='button-header'>{item}</button></Link>
                })
                }
        </div>
    </div>
  )
}

export default Header