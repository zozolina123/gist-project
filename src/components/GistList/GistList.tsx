import React, { FormEvent, useState } from "react";
import { IGistData, IGistsData } from "../../types";
import GistCard from "../GistCard/GistCard";
import styles from "./GistList.module.css";

const GistList: React.FC = () => {
  const gistsData: IGistsData = [
    { fileName: "Owner 1", language: "Javascript", forkedBy: ["User1,User2"] },
    { fileName: "Owner 2", language: "Ruby", forkedBy: ["User1,User2"] },
    { fileName: "Owner 3", language: "Python", forkedBy: ["User1,User2"] },
    { fileName: "Owner 1", language: "Javascript", forkedBy: ["User1,User2"] },
    { fileName: "Owner 2", language: "Ruby", forkedBy: ["User1,User2"] },
    { fileName: "Owner 3", language: "Python", forkedBy: ["User1,User2"] },
  ];

  const getGistCard = (gistsData: IGistsData) =>
    gistsData.map((gistData: IGistData) => (
      <GistCard
        fileName={gistData.fileName}
        language={gistData.language}
        forkedBy={gistData.forkedBy}
      />
    ));

  return <div className={styles.gistList}>{getGistCard(gistsData)}</div>;
};

export default GistList;
