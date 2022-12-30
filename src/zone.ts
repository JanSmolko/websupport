import ApiService, { ApiServiceOptions } from "./apiService";
import type { GetList } from "./types";

export type ZoneGetListResponse = GetList<{
  id: number;
  name: string;
}>;

export type ZoneGetOneResponse = {
  id: number;
  name: string;
  updateTime: number;
};

/* eslint-disable */
export default (apiService: ApiService) => ({
  getList: async (
    userId: number,
    options: ApiServiceOptions = {}
  ): Promise<ZoneGetListResponse> => {
    const res = await apiService.get(`/user/${userId}/zone/`, options);
    return res;
  },
  getOne: async (
    userId: number,
    domainName: string,
    options: ApiServiceOptions = {}
  ): Promise<ZoneGetOneResponse> => {
    const res = await apiService.get(
      `/user/${userId}/zone/${domainName}`,
      options
    );
    return res;
  },
  getOneMine: async (
    domainName: string,
    options: ApiServiceOptions = {}
  ): Promise<ZoneGetOneResponse> => {
    const res = await apiService.get(`/user/self/zone/${domainName}`, options);
    return res;
  },
});
