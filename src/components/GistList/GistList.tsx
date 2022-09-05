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
        description={gistData.description}
        languages={gistData.languages}
        numberOfFiles={gistData.numberOfFiles}
      />
    ));
  return gistsData?.length ? (
    <div className={styles.gistList}>{getGistCards(gistsData)}</div>
  ) : (
    <h4>No gists found for this username</h4>
  );
};

export default GistList;
