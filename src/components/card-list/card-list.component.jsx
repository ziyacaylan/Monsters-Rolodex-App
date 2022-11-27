import React from "react";
import Card from "../card/card.copmonent";
import "./card-list.styles.css";

const CardList = ({ canavarlar }) => (
  <div className="card-list">
    {canavarlar.map((canavar) => {
      return <Card canavar={canavar} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     //console.log("render Card");
//     //console.log(this.props.canavarlar);
//     const { canavarlar } = this.props;
//     return (
//       <div className="card-list">
//         {canavarlar.map((canavar) => {
//           return <Card canavar={canavar} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
