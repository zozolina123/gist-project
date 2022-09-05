import React, { FormEvent, useEffect, useState } from "react";
import styles from "./App.module.css";
import GistList from "./components/GistList/GistList";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchGist } from "./coreMethods/fetchGists";

function App() {
  const [gists, setGists] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchGist(username).then((mappedResponse) => {
      setGists(mappedResponse);
      setIsLoading(false);
    });
  }, [username]);
  console.log(isLoading);
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Search gists by username</h1>
        <SearchBar input={username} onChange={onChange} />
        <div>
          {username ? (
            <GistList gistsData={gists} isLoading={isLoading} />
          ) : (
            <h3>Please enter a username</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
