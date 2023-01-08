import { useState } from "react";
import "./App.css";
import "./components/card-list/card-list.component";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log(searchField);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    
  };
  return (
    <div className="App">
      <h1 className="app-title">First react</h1>
      <SearchBox
        className="monsters-search-Box"
        onChangeHandler={onSearchChange}
        placeholder="search monster"
      />
    </div>
  );
};


// components

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">First react</h1>
//
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
