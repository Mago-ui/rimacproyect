import React from 'react'

class ContentCar extends React.Component{

    render(){
        return (
            <div className="Content">
                <div className="Content__Text">
                    <p>¡Hola, <span className="Content__Text--change">Juan! </span></p>
                    <span>Completa los datos de tu auto</span>
                </div>
                <div>
                <div className="form-input">
                    <label>
                        <input required/>
                        <span className="placeholder">Año</span>
                    </label>
                    </div>
                    <div className="form-input">
                    <label>
                        <input required/>
                        <span className="placeholder">Marca</span>
                    </label>
                    </div>
                </div>
                <div>
                    <img alt="foto" />
                    <div>
                        <p>¿No encuentras el modelo?</p>
                        <p>clic aquí</p>
                    </div>
                    <div>
                        <p>¿Tu auto es a gas?</p>
                        <input/>
                        <input/>
                    </div>
                    <div>
                      <p>Indica la suma asegurada</p>
                      <div><p>MIN $12.500  </p> <p>MAX $16,500  </p></div>
                      <input/>
                      <button className="loginForm__cotizar">CONTINUAR</button>
                    </div>
                </div>
              
            </div>
        ) 
    }
}

export default ContentCar