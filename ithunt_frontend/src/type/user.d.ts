import {
  INTEREST,
  LANGUAGE,
  USER_ROLE,
  USER_STATUS,
} from "./../constants/index";

export interface UserQueryType {
  email?: string;
  role?: USER_ROLE;
  current?: number;
  pageSize?: number;
  all?: boolean;
}

export interface UserType {
  username: string;
  email: string;
  role: USER_ROLE;
  status: USER_STATUS;
  password: string;
  id: string;
}
export interface UserLoginType {
  email: string;
  password: string;
}
export interface UserInfoType {
  userId: string;
  username: string;
  language: LANGUAGE;
  interests: string[];
  contact: string;
}

export interface UserInfoQueryType {
  language?: LANGUAGE;
  interests?: string[];
  all?: boolean;
}

export interface UserCourseType {
  id: string;
  complete: string;
  coursename: string;
  userid: string;
  finishdate: string;
}
export interface UserQuizType {
  id: string;
  complete: string;
  coursename: string;
  userid: string;
  finishdate: string;
  score: string;
}