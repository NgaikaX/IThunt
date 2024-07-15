import request from "../utils/request";
import {
  UserInfoQueryType,
  UserInfoType,
  UserQueryType,
  UserType,
} from "../type";
import qs from "qs";
import axios from "axios";

export async function getUserList(params?: UserQueryType) {
  return request.get(`/api/user?${qs.stringify(params)}`);
}
export async function userAdd(params: UserType) {
  return request.post("/api/user", params);
}

export async function getUserDetails(id: string) {
  return request.get(`/api/user/${id}`);
}

export async function userDelete(id: string) {
  return request.delete(`/api/user/${id}`);
}

export async function userUpdate(params: UserType) {
  return request.put(`/api/user`, params);
}

export async function userLogin(params: Pick<UserType, "email" | "password">) {
  return request.post("/api/login", params);
}
export async function userLogout() {
  return request.get("/api/logout");
}
export async function userInfoAdd(params: UserInfoType) {
  return request.post("/api/userinfo", params);
}
export async function getUserInfoList(params?: UserInfoQueryType) {
  return request.get(`/api/userinfo?${qs.stringify(params)}`);
}
export async function getUserCourseList() {
  return request.get(`/api/usercourse`);
}
export async function getUserQuizList() {
  return request.get(`/api/userquiz`);
}