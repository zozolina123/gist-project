import { GIST_USER_API_URL } from "../constants";
import { IGistData } from "../types";

export const getUserGistsUrl = (username: string) =>
  `${GIST_USER_API_URL}/${username}/gists`;

const getLanguages = (filesInfo: any[]): string[] => {
  const languages = new Set<string>();
  filesInfo.forEach((fileInfo: any) =>
    fileInfo.language
      ? languages.add(fileInfo.language)
      : languages.add("Unknown")
  );
  return Array.from(languages);
};

// TODO: replace any with actual types
export const mapGistsResponse = (gistsResponse: any) => {
  const mappedResponse: IGistData[] = [];
  if (!gistsResponse.length) return mappedResponse;

  gistsResponse.forEach((gist: any) => {
    const filesInfo: any = Object.values(gist.files);
    mappedResponse.push({
      description: gist.description,
      languages: getLanguages(filesInfo),
      filesInfo,
      numberOfFiles: filesInfo.length,
    });
  });
  return mappedResponse;
};
