import React, { FormEvent } from "react";
import styles from "./SearchBar.module.css";

interface ISearchBar {
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  input: string;
}

const SearchBar: React.FC<ISearchBar> = ({ onChange, input }) => {
  return (
    <div className={styles.searchBar}>
      <p>Username: </p>
      <input className={styles.input} onChange={onChange} value={input} />
    </div>
  );
};

export default SearchBar;
