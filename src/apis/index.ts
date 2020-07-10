import { ClientConfig } from "../common/client";
import { ContactClient } from "./contact/client";
import { SecurityClient } from "./security/client";

const defaultConfig: ClientConfig = {
  host: "https://b623pa888e.execute-api.us-east-2.amazonaws.com/api",
};

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

/**
 * Factory method used for configuring and building a new contact client.
 */
export const portfolio = (
  config: ClientConfig = defaultConfig
): PortfolioClient => {
  return new PortfolioClient(config);
};

export * from "./contact/client";
export * from "./contact/models";
export * from "./security/client";
export * from "./security/models";
