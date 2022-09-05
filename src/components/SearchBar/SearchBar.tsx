import React, { FormEvent, useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className={styles.searchBar}>
      <p>Username: </p>
      <input className={styles.input} onChange={onChange} value={input} />
    </div>
  );
};

export default SearchBar;
