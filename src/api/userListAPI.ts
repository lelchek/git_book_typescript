import { get } from "./config";

export const PAGE_LIMIT = 100;

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export const fetchUserList = async (pageLimit = PAGE_LIMIT) => {
  const { data, headers } = await get<User[]>(`users?per_page=${pageLimit}`);

  return { data, links: headers.link };
};
