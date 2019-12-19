import React from "react";
import "./content.css";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>Tu będzie wynik z zapytania...</h1>
        <p>Content component</p>
        <h2> {this.props.city} </h2>
      </div>
    );
  }
}

export default Content;
