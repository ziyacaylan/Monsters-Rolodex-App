import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      canavarlar: [],
      aramaAlani: "",
    };
    // console.log("constructor");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { canavarlar: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
    // console.log("componentDidMount");
  }

  aramaDegisikligi = (e) => {
    const aramaAlani = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        aramaAlani,
      };
    });
  };
  render() {
    const { canavarlar, aramaAlani } = this.state;
    const { aramaDegisikligi } = this;
    console.log("render");
    const filteredMonsters = canavarlar.filter((item) => {
      return item.name.toLowerCase().includes(aramaAlani);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={aramaDegisikligi}
        />
        {/* {filteredMonsters.map((canavar) => {
          return (
            <div key={canavar.id}>
              <h1>{canavar.name}</h1>
            </div>
          );
        })} */}
        <CardList />
      </div>
    );
  }
}

export default App;
