import React from 'react'
import imagenCell from '../images/ic_phone.png'

class LoginForm extends React.Component{
     
    state={
      documento:'',
      celular:'',
      placa:'',
      errorDocument:false,
      errorCelular:false,
      errorPlaca:false,
      login:false
    }
    async componentDidMount(){
        await this.fetchData()
    }
    fetchData = async () =>{
        let res  = await fetch('https://randomuser.me/api')
        let data = await res.json()
        console.log(data)
    }
    handleClick =() =>{
        let ValorMensaje= true;
        if(this.state.documento === ''){
            this.setState(
                {errorDocument:true}
            )
            ValorMensaje = false
        }
        if(this.state.celular === ''){
            this.setState(
                {errorCelular:true}
            )
            ValorMensaje = false
        }
        if(this.state.placa === ''){
            this.setState(
                {errorPlaca:true}
            )
            ValorMensaje = false
        }
        if(ValorMensaje){
            console.log('enviando')
            window.location.href = "/FormCar";            
        }
    }
    onChange = (e) =>
    {
      let name =  e.target.name;
      let value = e.target.value;
      this.setState({
        [name]:value       
    })
    }
 
    render(){
        var mensaje;
        var cell;
        var placa;
        var cambio;
        
        if(this.state.errorDocument){
            mensaje = <label className="Mensaje__error Mensaje__error--change">Llene el campo Documento</label>
            cambio = {
                marginBottom:'12px'
            } 
        }
        if(this.state.errorCelular){
            cell = <label className="Mensaje__error">Llene el campo Celular</label>
        }
        if(this.state.errorPlaca){
            placa = <label className="Mensaje__error">Llene el campo Placa</label>
        }
       

        return (
        <div className="loginForm">
            <div className="Login__banner-nav Login__banner-nav--change">
                    <p> <span>¿Tienes alguna duda?</span><img className="Login__banner-cell" src={imagenCell} alt="cell"/>(01) 411 6001</p>
                </div>            
                <p>Déjanos tus Datos</p>
            <div className="loginForm__section">
                <div style={cambio} className="loginForm__section-select">
                <select>
                    <option value="Dni">Dni</option>
                    <option value="Ruc">Ruc</option>
                    </select>
                <input className="loginForm__section-document" type="text" placeholder="Nro. de doc" value={this.state.documento} name="documento"  onChange={this.onChange} />
                {mensaje}
                
                </div>
                <input type="text" placeholder="Celular" value={this.state.celular} name="celular" onChange={this.onChange}/>
                {cell}

                <input type="text" placeholder="Placa" value={this.state.placa} name="placa" onChange={this.onChange}/>
                {placa}

                <div>
            </div>
        </div>
        <label className="container" id="c3">
        <input type="checkbox" defaultChecked/>
        <span className="checkmark"></span>
                <span className="loginForm__data">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</span> 
            </label>
            <button onClick={this.handleClick} className="loginForm__cotizar">COTÍZALO</button>
        </div>
        ) 
    }
}

export default LoginForm