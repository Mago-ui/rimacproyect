import React from 'react'
import imagen from '../images/LogoRIMAC.svg'
import imagenGirl from '../images/imagenOne.svg'
import imagenGirlT from '../images/imagenTwo.svg'
import imagenCell from '../images/ic_phone.png'

import '../components/css/login.css'

class LoginBanner extends React.Component{

    render(){
        return (
            <div className="Login__banner">
                <div className="Login__banner-nav">
                    <img src={imagen} alt="rimac"/>
                    <p className="Login__banner-desk"><img className="Login__banner-cell" src={imagenCell} alt="cell"/>Llámanos</p>
                </div>
                <div className="Login__banner-text">
                   <img className="Login__img--Two" src={imagenGirlT} alt="girl" />
                    <div>
                        <p className="Login__banner-textNew">¡NUEVO!</p>
                        <p className="Login__banner-textSegurity">Seguro Vehicular <span>Tracking  </span></p>
                        <p className="Login__banner-textPar">Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div>
                   <img className="Login__img" src={imagenGirl} alt="girl" />
                   <p className="Login__banner-firma">© 2020 RIMAC Seguros y Reaseguros.</p>

                </div>
            </div>
        ) 
    }
}

export default LoginBanner