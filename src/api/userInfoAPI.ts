import { get, baseUrl } from "./config";

export interface UserInfo {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  created_at: string;
}

export const fetchUserInfo = async (userName: string) => {
  const { data } = await get<UserInfo>(`${baseUrl}/users/${userName}`);

  return data;
};
