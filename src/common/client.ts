import axios, { AxiosInstance } from "axios";

export interface ClientConfig {
  host: string;
  jwt?: string;
}

export abstract class BaseClient {
  readonly config: ClientConfig;
  protected readonly axiosInstance: AxiosInstance;

  constructor(config: ClientConfig, axiosInstance: AxiosInstance = axios) {
    this.config = config;
    this.axiosInstance = axiosInstance;
  }
}
