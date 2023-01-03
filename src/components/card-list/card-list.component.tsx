import React from "react";
import Card from "../card/card.copmonent";
import "./card-list.styles.css";
import { Canavar } from "../../App";

type CanavarListProps = {
  canavarlar: Canavar[];
};

const CardList = ({ canavarlar }: CanavarListProps) => (
  <div className="card-list">
    {canavarlar.map((canavar) => {
      return <Card key={canavar.id} canavar={canavar} />;
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
