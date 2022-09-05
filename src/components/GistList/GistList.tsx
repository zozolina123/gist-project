import React, { FormEvent, useState } from "react";
import { IGistData } from "../../types";
import GistCard from "../GistCard/GistCard";
import styles from "./GistList.module.css";
interface IGistList {
  gistsData: IGistData[];
}
const GistList: React.FC<IGistList> = ({ gistsData }) => {
  const getGistCards = (gistsData: IGistData[]) =>
    gistsData.map((gistData: IGistData) => (
      <GistCard
        fileName={gistData.fileName}
        language={gistData.language}
        forkedBy={gistData.forkedBy}
      />
    ));
  console.log(gistsData);
  return gistsData?.length ? (
    <div className={styles.gistList}>{getGistCards(gistsData)}</div>
  ) : null;
};

export default GistList;
