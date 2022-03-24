import { DataResponse } from "../types";

const DATA_URL =
  "https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json";

export const fetchData = async (): Promise<DataResponse> => {
  const response = await fetch(DATA_URL);
  const data = await response.json();
  return data;
};
