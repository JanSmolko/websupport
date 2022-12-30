import axios, { AxiosRequestConfig } from "axios";
import { createHmac } from "crypto";

const version = 1;

axios.defaults.baseURL = `https://rest.websupport.sk/v${version}/`;

const getGMTDate = (timestamp: number): string => {
  const zeroPad = (num: number, places: number): string =>
    String(num).padStart(places, "0");

  const date = new Date(timestamp * 1000);
  const YYYY = date.getUTCFullYear();
  const MM = zeroPad(date.getUTCMonth() + 1, 2);
  const DD = zeroPad(date.getUTCDate(), 2);
  const HH = zeroPad(date.getUTCHours(), 2);
  const mm = zeroPad(date.getUTCMinutes(), 2);
  const ss = zeroPad(date.getUTCSeconds(), 2);
  return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}Z`;
};

const getAuthData = (
  method: string,
  path: string,
  apiSecret: string
): { signature: string; date: string } => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const date = getGMTDate(timestamp);
  // add version to path
  const fullPath = `/v${version}${path}`;
  const hmac = createHmac("sha1", apiSecret);

  return {
    signature: hmac.update(`${method} ${fullPath} ${timestamp}`).digest("hex"),
    date,
  };
};

export const getHttpRequestOptions = (
  method: string,
  path: string,
  credentials: { apiKey: string; apiSecret: string }
): AxiosRequestConfig => {
  const authData = getAuthData(method, path, credentials.apiSecret);

  return {
    auth: {
      username: credentials.apiKey,
      password: authData.signature,
    },
    headers: {
      Date: authData.date,
    },
  };
};

export type ApiServiceCredentials = {
  apiKey: string;
  apiSecret: string;
};

export type ApiServiceOptions = Partial<{
  params: Record<string, string>;
}>;

export default class ApiService {
  private credentials: {
    apiKey: string;
    apiSecret: string;
  };

  constructor(credentials: ApiServiceCredentials) {
    this.credentials = credentials;
  }

  public async get(
    path: string,
    options: ApiServiceOptions = {}
  ): Promise<any> {
    const res = await axios.get(path, {
      ...getHttpRequestOptions("GET", path, this.credentials),
      ...options,
    });
    return res.data;
  }

  public async post(
    path: string,
    data: any,
    options: ApiServiceOptions = {}
  ): Promise<any> {
    const res = await axios.post(path, data, {
      ...getHttpRequestOptions("POST", path, this.credentials),
      ...options,
    });
    return res.data;
  }

  public async put(
    path: string,
    data: any,
    options: ApiServiceOptions = {}
  ): Promise<any> {
    const res = await axios.put(path, data, {
      ...getHttpRequestOptions("PUT", path, this.credentials),
      ...options,
    });
    return res.data;
  }

  public async delete(
    path: string,
    options: ApiServiceOptions = {}
  ): Promise<any> {
    const res = await axios.delete(path, {
      ...getHttpRequestOptions("DELETE", path, this.credentials),
      ...options,
    });
    return res.data;
  }
}
