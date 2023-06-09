import { Link } from "react-router-dom"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
 
 return (
<footer className="footer text-center mb-0">
    <div className="container">
        <div className="row">
        {/* Footer Location */}
            <div className="col-lg-4 mb-5">
                <p className="lead mb-3">Sitio creado y administrado por<br/> <a href="https://www.oscargonzalez.work/" className="link-light">Oscar González</a>
                </p>
                <img src="/static/app/img/3perrosyyo.jpg" className="rounded-circle" alt="Creador" width="220" height="220"/>
            </div>
            {/* Footer Términos */}
            <div className="col-lg-4 mb-5">
                <nav className="flex flex-column">
                    <Link to={"/terminos"} className="btn btn-light mx-1 mb-1">Términos de uso <i className="fas fa-scroll"></i></Link>
                    <a className="btn btn-light mx-1" href="https://github.com/OscarGonzalez97/BuscaMascota" target="_blank">Código fuente aquí <i className="fab fa-github"></i></a>
                </nav>   
             </div>
            {/* Footer Social Icons */}
            <div className="col-lg-4 mb-5">
                <h4 className="text-uppercase mb-4">Contacto</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/BuscaMascotapy" target="_blank">
                    <TwitterIcon fontSize="small"/>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://facebook.com/Busca-Mascota-105650557977880" target="_blank">
                    <FacebookIcon fontSize="small"/>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://instagram.com/buscamascotapy/" target="_blank">
                    <InstagramIcon fontSize="small"/>
                </a>
                 <a className="btn btn-outline-light btn-social mx-1" href="mailto:buscamascotapy@gmail.com" target="_blank">
                    <EmailIcon fontSize="small"/>
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
