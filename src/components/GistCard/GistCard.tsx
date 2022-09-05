import { randomUUID } from "crypto";
import React from "react";
import { IGistData } from "../../types";
import LanguageBadge from "../LanguageBadge/LanguageBadge";
import styles from "./GistCard.module.css";

const GistCard: React.FC<any> = ({
  description,
  languages,
  numberOfFiles,
  id,
}: IGistData) => {
  const languageBadges = languages.map((language) => (
    <LanguageBadge language={language} key={`${id}-badge`} />
  ));
  return (
    <div className={styles.card} key={id}>
      <p>Description: {description || "No Description Available"}</p>
      <p>Number of files: {numberOfFiles}</p>
      <div className={styles.languageBadgeContainer}>{languageBadges}</div>
    </div>
  );
};

export default GistCard;
