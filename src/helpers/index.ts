import { GIST_USER_API_URL } from "../constants";
import { IGistData } from "../types";

export const getUserGistsUrl = (username: string) =>
  `${GIST_USER_API_URL}/${username}/gists`;

// TODO: replace any with actual types
export const mapGistsResponse = (gistsResponse: any) => {
  const mappedResponse: IGistData[] = [];
  if (!gistsResponse.length) return mappedResponse;
  gistsResponse.forEach((gist: any) => {
    const fileInfo: any = Object.values(gist.files);
    mappedResponse.push({
      fileName: fileInfo[0].filename,
      language: fileInfo[0].language,
      fileUrl: fileInfo[0].raw_url,
      forkedBy: ["Test"],
    });
  });
  return mappedResponse;
};
