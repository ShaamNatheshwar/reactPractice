import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [
        {
          name:'shaam',
          id: '12e1233'
        },
        {
          name:'gohan',
          id: '12ef0233'
        },
        {
          name:'goku',
          id: '12ff1233'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
       {
        this.state.monsters.map((monster)=>{
          return <div key={monster.id}>
            <h1>{monster.name}</h1>

          </div>
        })
       }
      </div>
    );
  }
}

export default App;
