import "./App.css";
import React from "react";
import Person from "./components/Person";
import { Button } from "bootstrap-react";

class App extends React.Component {

  state={
    show : false 
  }

  handelcallShow = () => {
    console.log(this.state.show)
    this.setState({show : !this.state.show});
    }

  render() {
    
    return (
      
      <div className="App">
          <Button onClick={this.handelcallShow}>SHOW</Button> 
          {this.state.show &&   <Person />

          }
     
      </div>
    );
  }
}

export default App;
