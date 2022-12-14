import React from "react";
import "./card.styles.css";
import { Canavar } from "../../App";

type CardProps = {
  canavar: Canavar;
};

const Card = ({ canavar }: CardProps) => {
  const { id, name, email } = canavar;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`canavar ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.canavar;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`canavar ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
