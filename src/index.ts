import ApiService, { ApiServiceCredentials } from "./apiService";
import billing from "./billing";
import dns from "./dns";
import domainProfile from "./domainProfile";
import service from "./service";
import user from "./user";
import zone from "./zone";

export class Websupport {
  private apiService: ApiService;

  public billing;
  public domainProfile;
  public dns;
  public service;
  public user;
  public zone;

  constructor(credentials: ApiServiceCredentials) {
    this.apiService = new ApiService(credentials);
    this.billing = billing(this.apiService);
    this.domainProfile = domainProfile(this.apiService);
    this.dns = dns(this.apiService);
    this.service = service(this.apiService);
    this.user = user(this.apiService);
    this.zone = zone(this.apiService);
  }

  getApiService(): ApiService {
    return this.apiService;
  }
}

export type { ApiServiceCredentials, ApiServiceOptions } from "./apiService";
export * from "./billing";
export * from "./domainProfile";
export * from "./dns";
export * from "./service";
export * from "./user";
export * from "./zone";
