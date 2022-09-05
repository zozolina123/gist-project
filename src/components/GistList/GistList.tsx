import React from "react";
import { IGistData } from "../../types";
import GistCard from "../GistCard/GistCard";
import styles from "./GistList.module.css";
interface IGistList {
  gistsData: IGistData[];
  isLoading: boolean;
}
const GistList: React.FC<IGistList> = ({ gistsData, isLoading }) => {
  const gistCards = gistsData.map((gistData: IGistData) => (
    <GistCard
      key={gistData.id}
      description={gistData.description}
      languages={gistData.languages}
      numberOfFiles={gistData.numberOfFiles}
    />
  ));
  if (isLoading) return <h3>Loading data ...</h3>;

  return gistsData?.length ? (
    <div className={styles.gistList}>{gistCards}</div>
  ) : (
    <h4>No gists found for this username</h4>
  );
};

export default GistList;
