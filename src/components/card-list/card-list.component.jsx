import { Component } from "react";
import Card from "../card/card.copmonent";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    //console.log("render Card");
    //console.log(this.props.canavarlar);
    const { canavarlar } = this.props;
    return (
      <div className="card-list">
        {canavarlar.map((canavar) => {
          return <Card canavar={canavar} />;
        })}
      </div>
    );
  }
}

export default CardList;
