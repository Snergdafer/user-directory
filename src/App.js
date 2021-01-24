
import React, {Component} from "react"
import './App.css';
import Card from "./components/Card.js"

class App extends Component{
  constructor(){
    super()
    this.state = {
      bs: "stuff"
    }
  }



render() {
  return (
    <div className="App">
      <header><h2>Home</h2></header>
      <Card/>
    </div>
  );
}
}

export default App;
