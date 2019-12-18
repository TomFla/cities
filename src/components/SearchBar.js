import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let city = document.getElementById("input");
    console.log(city);
  };

  render() {
    return (
      <div className="inputField">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Check 10 most polluted cities" />
          <button type="submit">Start</button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
