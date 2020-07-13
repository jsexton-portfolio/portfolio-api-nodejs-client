import {
  ClientConfig,
  ClientConfigWrapper,
  portfolio,
  PortfolioClient,
} from "../src";

describe("portfolio client factory function", () => {
  it("should return portfolio client", () => {
    const client = portfolio();
    expect(client);
  });

  it("should correctly configure client defaults", () => {
    const expectedHost = "https://api.justinsexton.net";
    const client = portfolio();
    expect(client.config.host).toBe(expectedHost);
  });

  it("should correctly configure client", () => {
    const expectedHost = "123";
    const client = portfolio({ host: expectedHost });
    expect(client.config.host).toBe(expectedHost);
  });
});

describe("portfolio client", () => {
  const config: ClientConfig = {
    host: "123",
  };

  let client: PortfolioClient;

  beforeAll(() => {
    client = new PortfolioClient(config);
  });

  it("should have contact client", () => {
    expect(client.contact);
  });

  it("should have security client", () => {
    expect(client.security);
  });

  it("should have expected config", () => {
    expect(client.config).toBe(config);
  });
});

describe("client config wrapper", () => {
  const config = {
    host: "host",
    jwt: "123.abc.jwt",
    version: "v1.0",
  };

  let configWrapper: ClientConfigWrapper;

  beforeAll(() => {
    configWrapper = new ClientConfigWrapper(config);
  });

  it("should correctly attach jwt as bearer token header", () => {
    const headers = configWrapper.headers;
    expect(headers["Authorization"]).toEqual(`Bearer ${config.jwt}`);
  });

  it("should correctly attach version to custom header", () => {
    const headers = configWrapper.headers;
    expect(headers["X-PORTFOLIO-VERSION"]).toEqual(config.version);
  });
});
