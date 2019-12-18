import React from "react";
import "./App.css";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
