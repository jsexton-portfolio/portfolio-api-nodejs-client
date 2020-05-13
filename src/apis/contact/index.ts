import { ClientConfig } from "../../common/config";
import { ContactClient } from "./client";

const defaultConfig: ClientConfig = {
  host: "https://b623pa888e.execute-api.us-east-2.amazonaws.com/api/",
};

/**
 * Factory method used for configuring and building a new contact client.
 */
export const contact = (
  config: ClientConfig = defaultConfig
): ContactClient => {
  return new ContactClient(config);
};

export * from "./client";
export * from "./messages";
export * from "./models";
