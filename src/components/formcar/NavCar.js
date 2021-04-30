import React from 'react'
import imagen from '../../images/LogoRIMAC.svg'
import imagenCell from '../../images/ic_phone.png'
import Range from '../formcar/Range'
import '../css/formCar.css'

class NavCar extends React.Component{

    render(){
        return (
            <div >
                <div className="formCar">
                    <img src={imagen} alt="rimac"/>
                    <p><img className="Login__banner-cell"  src={imagenCell} alt="cell"/>Llámanos</p>
                </div>    
                <div className="formCar__progress">
                    <p>PASO 1 DE 2</p>
                    <Range></Range>
                </div>

            </div>
        ) 
    }
}

export default NavCar