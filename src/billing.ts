import ApiService, { ApiServiceOptions } from "./apiService";
import { Delete, GetList, Post, Put } from "./types";

export type BillingGetListResponse = GetList<{
  id: number;
  profile: string;
  isDefault: boolean;
  name: string;
  city: string;
  street: string;
  companyRegId: string;
  taxId: string;
  vatId: string;
  zip: string;
  country: string;
  isic: string;
}>;

export type BillingGetOneResponse = {
  id: number;
  profile: string;
  isDefault: boolean;
  name: string;
  city: string;
  street: string;
  companyRegId: string;
  taxId: string;
  vatId: string;
  zip: string;
  country: string;
  isic: string;
};

export type BillingPostOneData = {
  profile: string;
  isDefault?: boolean;
  name: string;
  city: string;
  street: string;
  zip: string;
  country: string;
  companyRegId?: string;
  taxId?: string;
  vatId?: string;
  isic?: string;
};

export type BillingPostOneResponse = Post<BillingGetOneResponse>;

export type BillingPutOneData = Partial<BillingPostOneData>;

export type BillingPutOneResponse = Put<BillingGetOneResponse>;

export type BillingDeleteOneResponse = Delete<BillingGetOneResponse>;

/* eslint-disable */
export default (apiService: ApiService) => ({
  getList: async (
    userId: number,
    options: ApiServiceOptions = {}
  ): Promise<BillingGetListResponse> => {
    const res = await apiService.get(`/user/${userId}/billing`, options);
    return res;
  },
  getOne: async (
    userId: number,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<BillingGetOneResponse> => {
    const res = await apiService.get(`/user/${userId}/billing/${id}`, options);
    return res;
  },
  getOneMine: async (
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<BillingGetOneResponse> => {
    const res = await apiService.get(`/user/self/billing/${id}`, options);
    return res;
  },
  postOne: async (
    userId: number,
    data: BillingPostOneData,
    options: ApiServiceOptions = {}
  ): Promise<BillingPostOneResponse> => {
    const res = await apiService.post(`/user/${userId}/billing`, data, options);
    return res;
  },
  postOneMine: async (
    data: BillingPostOneData,
    options: ApiServiceOptions = {}
  ): Promise<BillingPostOneResponse> => {
    const res = await apiService.post(`/user/self/billing`, data, options);
    return res;
  },
  putOne: async (
    userId: number,
    id: number,
    data: BillingPutOneData,
    options: ApiServiceOptions = {}
  ): Promise<BillingPutOneResponse> => {
    const res = await apiService.put(
      `/user/${userId}/billing/${id}`,
      data,
      options
    );
    return res;
  },
  putOneMine: async (
    id: number,
    data: BillingPutOneData,
    options: ApiServiceOptions = {}
  ): Promise<BillingPutOneResponse> => {
    const res = await apiService.put(`/user/self/billing/${id}`, data, options);
    return res;
  },
  deleteOne: async (
    userId: number,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<BillingDeleteOneResponse> => {
    const res = await apiService.delete(
      `/user/${userId}/billing/${id}`,
      options
    );
    return res;
  },
  deleteOneMine: async (
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<BillingDeleteOneResponse> => {
    const res = await apiService.delete(`/user/self/billing/${id}`, options);
    return res;
  },
});
