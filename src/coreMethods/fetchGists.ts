import { getUserGistsUrl, mapGistsResponse } from "../helpers";

export const fetchGist = (username: string): Promise<any> => {
  const gistUrl = getUserGistsUrl(username);
  return fetch(gistUrl)
    .then((response) => response.json())
    .then((gistsResponse: any) => mapGistsResponse(gistsResponse));
};
