import React from 'react'
import NavCar from '../components/formcar/NavCar'
import  ContentCar from '../components/formcar/ContentCar'

// import LoginForm from '../components/LoginForm'
import '../components/css/login.css'

class Login extends React.Component{
    render(){
        return(
            <div className="">
               <NavCar/>
                <ContentCar/>
            </div>
        )
    }
}

export default Login