import React from "react";
import styles from "./App.module.css";
import GistList from "./components/GistList/GistList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Search gists by username</h1>
        <div>
          <SearchBar />
          <GistList />
        </div>
      </div>
    </div>
  );
}

export default App;
