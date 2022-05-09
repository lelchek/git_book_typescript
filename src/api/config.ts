import axios from "axios";

export const baseUrl = "https://api.github.com";

const headers = {
  Accept: "application/vnd.github.v3+json",
};

export const get = async <T>(url: string) => {
  return axios
    .get<T>(`${baseUrl}/${url}`, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
