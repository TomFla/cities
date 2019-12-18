import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="inputField">
        <form className="formTag">
          <input type="text" placeholder="type city" />
          <button type="submit">Start</button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
