import React, { FormEvent, useEffect, useState } from "react";
import styles from "./App.module.css";
import GistList from "./components/GistList/GistList";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchGist } from "./coreMethods/fetchGists";

function App() {
  const [gists, setGists] = useState([]);
  const [username, setUsername] = useState("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  useEffect(() => {
    fetchGist(username).then((mappedResponse) => {
      setGists(mappedResponse);
    });
  }, [username]);

  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Search gists by username</h1>
        <div>
          <SearchBar input={username} onChange={onChange} />
          <GistList gistsData={gists} />
        </div>
      </div>
    </div>
  );
}

export default App;
