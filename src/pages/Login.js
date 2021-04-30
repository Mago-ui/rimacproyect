import React from 'react'
import LoginBanner from '../components/LoginBanner'
import LoginForm from '../components/LoginForm'
import '../components/css/login.css'

class Login extends React.Component{
    render(){
        return(
            <div className="Login">
                <LoginBanner/>
                <LoginForm/>

            </div>
        )
    }
}

export default Login