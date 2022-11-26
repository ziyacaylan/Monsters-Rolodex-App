import { Component } from "react";
import "./App.css";
import { styles } from "./styles.module.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
    // console.log("render App");
    const filteredMonsters = canavarlar.filter((item) => {
      return item.name.toLowerCase().includes(aramaAlani);
    });
    return (
      <div className="App">
        <h1 className="monsters-title">CANAVARLAR</h1>
        <SearchBox
          onChangeHandler={aramaDegisikligi}
          placeholder="canavarları ara"
          className="monsters-search-box"
        />
        <CardList canavarlar={filteredMonsters} />
      </div>
    );
  }
}

export default App;
