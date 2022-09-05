import React from "react";
import "./App.css";
import GistList from "./components/GistList/GistList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar />
        <GistList />
      </div>
    </div>
  );
}

export default App;
