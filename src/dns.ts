import ApiService, { ApiServiceOptions } from "./apiService";
import { Delete, GetList, Post, Put } from "./types";
import { ZoneGetOneResponse } from "./zone";

type DnsType = "A" | "AAAA" | "MX" | "ANAME" | "CNAME" | "NS" | "TXT" | "SRV";

export type DnsGetListResponse = GetList<{
  id: number;
  type: DnsType;
  name: string;
  content: string;
  ttl: number;
  prio: number | null;
  weight: number | null;
  port: number | null;
}>;

export type DnsGetOneResponse = {
  id: number;
  type: DnsType;
  name: string;
  content: string;
  ttl: number;
  prio: number | null;
  weight: number | null;
  port: number | null;
  zone: ZoneGetOneResponse;
};

export type DnsPostOneData = {
  type: DnsType;
  name: string;
  content: string;
  ttl: number;
  prio?: number;
  port?: number;
  weight?: number;
};

export type DnsPostOneResponse = Post<DnsGetOneResponse>;

export type DnsPutOneData = Partial<Omit<DnsPostOneData, "type">>;

export type DnsPutOneResponse = Put<DnsGetOneResponse>;

export type DnsDeleteOneResponse = Delete<DnsGetOneResponse>;

/* eslint-disable */
export default (apiService: ApiService) => ({
  getList: async (
    userId: number,
    domainName: string,
    options: ApiServiceOptions = {}
  ): Promise<GetList<DnsGetListResponse>> => {
    const res = await apiService.get(
      `/user/${userId}/zone/${domainName}/record`,
      options
    );
    return res;
  },
  getListMine: async (
    domainName: string,
    options: ApiServiceOptions = {}
  ): Promise<DnsGetListResponse> => {
    const res = await apiService.get(
      `/user/self/zone/${domainName}/record`,
      options
    );
    return res;
  },
  getOne: async (
    userId: number,
    domainName: string,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DnsGetOneResponse> => {
    const res = await apiService.get(
      `/user/${userId}/zone/${domainName}/record/${id}`,
      options
    );
    return res;
  },
  getOneMine: async (
    domainName: string,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DnsGetOneResponse> => {
    const res = await apiService.get(
      `/user/self/zone/${domainName}/record/${id}`,
      options
    );
    return res;
  },
  postOne: async (
    userId: number,
    domainName: string,
    data: DnsPostOneData,
    options: ApiServiceOptions = {}
  ): Promise<DnsPostOneResponse> => {
    const res = await apiService.post(
      `/user/${userId}/zone/${domainName}/record`,
      data,
      options
    );
    return res;
  },
  postOneMine: async (
    domainName: string,
    data: DnsPostOneData,
    options: ApiServiceOptions = {}
  ): Promise<DnsPostOneResponse> => {
    const res = await apiService.post(
      `/user/self/zone/${domainName}/record`,
      data,
      options
    );
    return res;
  },
  putOne: async (
    userId: number,
    domainName: string,
    id: number,
    data: DnsPutOneData,
    options: ApiServiceOptions = {}
  ): Promise<DnsPutOneResponse> => {
    const res = await apiService.put(
      `/user/${userId}/zone/${domainName}/record/${id}`,
      data,
      options
    );
    return res;
  },
  putOneMine: async (
    domainName: string,
    id: number,
    data: DnsPostOneData,
    options: ApiServiceOptions = {}
  ): Promise<DnsPutOneResponse> => {
    const res = await apiService.put(
      `/user/self/zone/${domainName}/record/${id}`,
      data,
      options
    );
    return res;
  },
  deleteOne: async (
    userId: number,
    domainName: string,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DnsDeleteOneResponse> => {
    const res = await apiService.delete(
      `/user/${userId}/zone/${domainName}/record/${id}`,
      options
    );
    return res;
  },
  deleteOneMine: async (
    domainName: string,
    id: number,
    options: ApiServiceOptions = {}
  ): Promise<DnsDeleteOneResponse> => {
    const res = await apiService.delete(
      `/user/self/zone/${domainName}/record/${id}`,
      options
    );
    return res;
  },
});
