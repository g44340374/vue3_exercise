export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  userId?: string;
  userName?: string;
  realName?: string;
  avatar?: string;
  desc?: string;
  password?: string;
  token?: string;
  organization?: string;
  location?: string;
  email?: string;
  auths?: string[];
  is_admin?: number;
  blogJuejin?: string;
  blogZhihu?: string;
  blogGithub?: string;
  profileBio?: string;
  devLanguages?: string;
  role?: RoleType;
}
