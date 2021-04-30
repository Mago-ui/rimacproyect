import Login from './pages/Login'
import FormCar from './pages/FormCar'

import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';


class App extends React.Component{
  render(){
    return(
      <div>
      <BrowserRouter>
          <Route exact path='/' component={Login}/>
          <Route exact path='/FormCar' component={FormCar}/>
      </BrowserRouter>
      
      </div>


    )
  }
}

export default App;
