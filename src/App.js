import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "shaam", secondName: "Natheshwar" },
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi!! this is {this.state.name.firstName}{" "}
            {this.state.name.secondName}
          </p>

          <button
            onClick={() =>
              this.setState(() => {
                return {
                  name:{firstName : 'gohan', secondName: 'gogeta'}
                };
              },
              ()=>{
                console.log(this.state);
              }
              )
            }
          >
            change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
