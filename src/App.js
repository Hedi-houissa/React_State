import "./App.css";
import React from "react";
import Person from "./components/Person";
import { Button } from "bootstrap-react";

class App extends React.Component {

  state={
    show : true
  }

  handelcallShow = () => {
    this.setState.show = false;
    console.log(this.state.show)
    }

  render() {
    
    return (
      
      <div className="App">
          <Button onClick={this.handelcallShow}>SHOW</Button> 
          <Person />
     
      </div>
    );
  }
}

export default App;
