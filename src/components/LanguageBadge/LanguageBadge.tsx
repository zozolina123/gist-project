import React from "react";
import styles from "./LanguageBadge.module.css";

interface ILanguageBadge {
  language: string;
}

const LanguageBadge: React.FC<ILanguageBadge> = ({ language }) => {
  return (
    <div className={styles.languageBadge}>
      <p>{language}</p>
    </div>
  );
};

export default LanguageBadge;
