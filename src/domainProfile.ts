import ApiService, { ApiServiceOptions } from "./apiService";
import { Delete, GetList, Post, Put } from "./types";

export type DomainProfileGetListResponse = GetList<{
  id: string;
  firstName: string;
  lastName: string;
  orgName: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
  identBirthday: string;
  identVat: string;
  identPassport: string;
  identCompanyRegistration: string;
  identIdentityCard: string;
}>;

export type DomainProfileGetOneResponse = {
  id: string;
  firstName: string;
  lastName: string;
  orgName: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
  identBirthday: string;
  identVat: string;
  identPassport: string;
  identCompanyRegistration: string;
  identIdentityCard: string;
  domains: Array<unknown>;
  pendingDomains: Array<unknown>;
  changeRequest: Array<unknown>;
};

export type DomainProfilePostOneData = {
  firstName: string;
  lastName: string;
  orgName?: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
  identBirthday?: string;
  identVat?: string;
  identPassport?: string;
  identCompanyRegistration?: string;
  identIdentityCard?: string;
};

export type DomainProfilePostOneResponse = Post<
  Omit<
    DomainProfileGetOneResponse,
    "domains" | "pendingDomains" | "changeRequest"
  >
>;

export type DomainProfilePutOneData = Partial<DomainProfilePostOneData>;

export type DomainProfilePutOneResponse = Put<
  Omit<
    DomainProfileGetOneResponse,
    "domains" | "pendingDomains" | "changeRequest"
  >
>;

export type DomainProfileDeleteOneResponse =
  Delete<DomainProfileGetOneResponse>;

/* eslint-disable */
export default (apiService: ApiService) => ({
  getList: async (
    userId: number,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfileGetListResponse> => {
    const res = await apiService.get(`/user/${userId}/domainProfile`, options);
    return res;
  },
  getOne: async (
    userId: number,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfileGetOneResponse> => {
    const res = await apiService.get(
      `/user/${userId}/domainProfile/${id}`,
      options
    );
    return res;
  },
  getOneMine: async (
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfileGetOneResponse> => {
    const res = await apiService.get(`/user/self/domainProfile/${id}`, options);
    return res;
  },
  postOne: async (
    userId: number,
    data: DomainProfilePostOneData,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfilePostOneResponse> => {
    const res = await apiService.post(
      `/user/${userId}/domainProfile`,
      data,
      options
    );
    return res;
  },
  postOneMine: async (
    data: DomainProfilePostOneData,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfilePostOneResponse> => {
    const res = await apiService.post(
      `/user/self/domainProfile`,
      data,
      options
    );
    return res;
  },
  putOne: async (
    userId: number,
    id: number,
    data: DomainProfilePutOneData,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfilePutOneResponse> => {
    const res = await apiService.put(
      `/user/${userId}/domainProfile/${id}`,
      data,
      options
    );
    return res;
  },
  putOneMine: async (
    id: number,
    data: DomainProfilePutOneData,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfilePutOneResponse> => {
    const res = await apiService.put(
      `/user/self/domainProfile/${id}`,
      data,
      options
    );
    return res;
  },
  deleteOne: async (
    userId: number,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfileDeleteOneResponse> => {
    const res = await apiService.delete(
      `/user/${userId}/domainProfile/${id}`,
      options
    );
    return res;
  },
  deleteOneMine: async (
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DomainProfileDeleteOneResponse> => {
    const res = await apiService.delete(
      `/user/self/domainProfile/${id}`,
      options
    );
    return res;
  },
});
