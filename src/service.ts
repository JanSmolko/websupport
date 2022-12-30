import ApiService, { ApiServiceOptions } from "./apiService";
import { GetList, Put } from "./types";

export type ServiceGetListResponse = GetList<{
  id: number;
  serviceName: string;
  status: string;
  name: string;
  createTime: number;
  expireTime: number;
  price: number;
  autoExtend: boolean;
}>;

export type ServiceGetOneResponse = {
  id: number;
  serviceName: string;
  status: string;
  name: string;
  createTime: number;
  expireTime: number;
  price: number;
  autoExtend: boolean;
};

export type ServicePutOneData = {
  autoExtend: boolean;
};

export type ServicePutOneResponse = Put<ServiceGetOneResponse>;

/* eslint-disable */
export default (apiService: ApiService) => ({
  getList: async (
    userId: number,
    options: ApiServiceOptions = {}
  ): Promise<ServiceGetListResponse> => {
    const res = await apiService.get(`/user/${userId}/service`, options);
    return res;
  },
  getOne: async (
    userId: number,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<ServiceGetOneResponse> => {
    const res = await apiService.get(`/user/${userId}/service/${id}`, options);
    return res;
  },
  getOneMine: async (
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<ServiceGetOneResponse> => {
    const res = await apiService.get(`/user/self/service/${id}`, options);
    return res;
  },
  putOne: async (
    userId: number,
    id: number,
    data: ServicePutOneData,
    options: ApiServiceOptions = {}
  ): Promise<ServicePutOneResponse> => {
    const res = await apiService.put(
      `/user/${userId}/service/${id}`,
      data,
      options
    );
    return res;
  },
  putOneMine: async (
    id: number,
    data: ServicePutOneData,
    options: ApiServiceOptions = {}
  ): Promise<ServicePutOneResponse> => {
    const res = await apiService.put(`/user/self/service/${id}`, data, options);
    return res;
  },
});
