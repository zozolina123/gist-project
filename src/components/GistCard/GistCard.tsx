import React from "react";
import { IGistData } from "../../types";
import styles from "./GistCard.module.css";

const GistCard: React.FC<any> = (props: IGistData) => {
  return (
    <div className={styles.card}>
      <p>Filename: {props.fileName}</p>
      <p>Language - {props.language}</p>
      <p>Forked by - {props.forkedBy}</p>
    </div>
  );
};

export default GistCard;
