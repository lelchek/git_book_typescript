import { get, baseUrl } from "./config";

export const PAGE_LIMIT = 100;

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export const fetchUserList = async (pageLimit = PAGE_LIMIT) => {
  const { data, headers } = await get<User[]>(
    `${baseUrl}/users?per_page=${pageLimit}`
  );

  return { data, links: headers.link };
};

export const fetchMoreUserList = async (url: string) => {
  const { data, headers } = await get<User[]>(url);

  return { data, links: headers.link };
};
