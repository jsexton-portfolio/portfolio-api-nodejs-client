import { portfolio, PortfolioClient } from "../src";

describe("portfolio client factory function", () => {
  it("should return portfolio client", () => {
    const client = portfolio();
    expect(client);
  });

  it("should correctly configure client defaults", () => {
    const expectedHost =
      "https://b623pa888e.execute-api.us-east-2.amazonaws.com/api";
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
  const config = {
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
