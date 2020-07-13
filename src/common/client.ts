import axios, { AxiosInstance } from "axios";
import { PortfolioRequest } from "./request";

export type Headers = { [headerName: string]: any };

export interface ClientConfig {
  host: string;
  jwt?: string;
  version?: string;
}

export class ClientConfigWrapper {
  private readonly config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = config;
  }

  merge = (config: ClientConfig | PortfolioRequest): ClientConfigWrapper => {
    const mergedConfig: ClientConfig = {
      ...this.config,
      ...config,
    };
    return new ClientConfigWrapper(mergedConfig);
  };

  get headers(): Headers {
    return {
      Authorization: `Bearer ${this.config.jwt}`,
      "X-PORTFOLIO-VERSION": this.config.version,
    };
  }

  get host(): string {
    return this.config.host;
  }

  get jwt(): string | undefined {
    return this.config.jwt;
  }

  get version(): string | undefined {
    return this.config.version;
  }
}

export abstract class BaseClient {
  readonly config: ClientConfigWrapper;
  protected readonly axiosInstance: AxiosInstance;

  constructor(config: ClientConfig, axiosInstance: AxiosInstance = axios) {
    this.config = new ClientConfigWrapper(config);
    this.axiosInstance = axiosInstance;
  }
}
