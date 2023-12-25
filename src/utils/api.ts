import { ApiEndPointTypes, apiEndPoint, apiURL } from "@/constants";

export const getRequestURL = (endPoint: ApiEndPointTypes) => {
  const requestURL = `${apiURL}${apiEndPoint[endPoint]}`;
  return requestURL;
};
