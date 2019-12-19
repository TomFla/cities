import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const inputField = document.getElementById("input");
    const url = "https://api.openaq.org/v1/cities";
    const wordQuery = inputField.value;
    console.log(wordQuery);
  };

  render() {
    return (
      <div className="inputField">
        <form>
          <input
            id="input"
            type="text"
            placeholder="Check 10 most polluted cities"
          />
          <button type="submit">Start</button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
