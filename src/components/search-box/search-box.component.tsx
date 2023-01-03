import React from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
  return true;
};

// interface ISearchBoxProps extends IChangeHandlerProps {
// interface ISearchBoxProps {
//   className: string;
//   placeHolder?: string;
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

type SearcBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearcBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

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
