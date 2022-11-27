import React from "react";

import "./search-box.styles.css";

const SearchBox = (canavarlar) => {
  return (
    <div>
      <input
        className={`search-box ${canavarlar.className}`}
        type="search"
        placeholder={canavarlar.placeholder}
        onChange={canavarlar.onChangeHandler}
      />
    </div>
  );
};

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }
export default SearchBox;
