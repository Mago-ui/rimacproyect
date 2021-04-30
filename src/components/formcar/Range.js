import React from 'react'
import '../css/formCar.css'

class Range extends React.Component{

    render(){
        return (
            <div className="">    
               <progress value="70" max="100">70 %</progress>
            </div>
        ) 
    }
}

export default Range