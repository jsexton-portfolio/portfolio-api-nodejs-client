import { ClientConfig } from "../common/client";
import { ContactClient } from "./contact/client";
import { SecurityClient } from "./security/client";

export class PortfolioClient {
  readonly config: ClientConfig;
  readonly contact: ContactClient;
  readonly security: SecurityClient;

  constructor(config: ClientConfig) {
    this.config = config;
    this.contact = new ContactClient(config);
    this.security = new SecurityClient(config);
  }
}

const defaultConfig = { host: "https://api.justinsexton.net" };

const mergeConfigs = (
  configOne: ClientConfig,
  configTwo: ClientConfig
): ClientConfig => {
  return {
    ...configTwo,
    ...configOne,
  };
};

/**
 * Factory method used for configuring and building a new contact client.
 */
export const portfolio = (config?: ClientConfig): PortfolioClient => {
  const resolvedConfig =
    config !== undefined ? mergeConfigs(config, defaultConfig) : defaultConfig;
  return new PortfolioClient(resolvedConfig);
};

export * from "./contact/client";
export * from "./contact/models";
export * from "./security/client";
export * from "./security/models";
