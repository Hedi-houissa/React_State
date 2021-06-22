import React from 'react'
import Image from '../assets/hedi.jpg'
import './style.css'

class Person extends React.Component {

    state={
        fullname:"hedi",
        bio:"bio",
        imgSrc:"img",
        profession:"student"
      }

    render(){
        
        return (
            <div className="container">
                <h1>  my name is : {this.state.fullname}  </h1>
                <h2> profession : {this.state.profession}  </h2>
                <h2>  Bio : {this.state.bio}       </h2>
                
                <img src={Image} alt="not existe" />
                
            </div>
        )
    }

}

export default Person
