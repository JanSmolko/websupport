import { BillingGetOneResponse } from "./billing";
import ApiService, { ApiServiceOptions } from "./apiService";
import { GetList, Post, Put } from "./types";
import { MarketGetOneResponse, MarketIdentifier } from "./market";

export type UserGetListResponse = GetList<{
  id: number;
  login: string;
  parentId: number | null;
  active: boolean;
  createTime: number;
  group: string;
}>;

export type UserGetOneResponse = {
  id: number;
  login: string;
  parentId: number | null;
  active: boolean;
  createTime: number;
  group: string;
  email: string;
  phone: string;
  sknicHandle: string;
  contactPerson: string;
  resellerToken: string;
  credit: number;
  verifyUrl: string;
  billing: Array<BillingGetOneResponse>;
  market: MarketGetOneResponse;
};

export type UserPostOneData = {
  login: string;
  password: string;
  email: string;
  name: string;
  city: string;
  street: string;
  zip: string;
  country: string;
  phone: string;
  confirmTerms: string;

  market?: MarketIdentifier;
  isSubUser?: boolean;
  contactPerson?: string;
  companyRegId?: string;
  taxId: string;
  vatId: string;
  isic: string;
};

export type UserPostOneResponse = Post<UserGetOneResponse>;

export type UserPostRestorePassData = { login: string };

export type UserPostRestorePassResponse = Post<Record<string, never>>;

export type UserPutOneData = Partial<{
  password: string;
  email: string;
  phone: string;
  contactPerson: string;
  userLanguage: string;
}>;

export type UserPutOneResponse = Put<UserGetOneResponse>;

/* eslint-disable */
export default (apiService: ApiService) => ({
  getList: async (
    options: ApiServiceOptions = {}
  ): Promise<UserGetListResponse> => {
    const res = await apiService.get("/user", options);
    return res;
  },
  getOne: async (
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<UserGetOneResponse> => {
    const res = await apiService.get(`/user/${id}`, options);
    return res;
  },
  getOneMine: async (
    options: ApiServiceOptions = {}
  ): Promise<UserGetOneResponse> => {
    const res = await apiService.get("/user/self", options);
    return res;
  },
  postOne: async (
    data: UserPostOneData,
    options: ApiServiceOptions = {}
  ): Promise<UserPostOneResponse> => {
    const res = await apiService.post("/user", data, options);
    return res;
  },
  postRestorePass: async (
    data: UserPostRestorePassData,
    options: ApiServiceOptions = {}
  ): Promise<UserPostRestorePassResponse> => {
    const res = await apiService.post("/user/restorepass", data, options);
    return res;
  },
  putOne: async (
    id: number,
    data: UserPutOneData,
    options: ApiServiceOptions = {}
  ): Promise<UserPutOneResponse> => {
    const res = await apiService.put(`/user/${id}`, data, options);
    return res;
  },
});
