import React, { FormEvent, useState } from "react";
import styles from "./GistList.module.css";

const GistList: React.FC = () => {
  return (
    <div className={styles.gistList}>
      <div className={styles.card}>
        <h3>Owner "Avatar"</h3>
        <p>Tags - </p>
        <p>Forked by - </p>
      </div>
      <div className={styles.card}>
        <h3>Owner "Avatar"</h3>
        <p>Tags - </p>
        <p>Forked by - </p>
      </div>
    </div>
  );
};

export default GistList;
