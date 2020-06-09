import { contact, ContactClient } from "../src";

describe("contact client factory function", () => {
  it("should return contact client", () => {
    const client = contact();
    expect(client);
  });

  it("should correctly configure client defaults", () => {
    const expectedHost =
      "https://b623pa888e.execute-api.us-east-2.amazonaws.com/api";
    const client = contact();
    expect(client.config.host).toBe(expectedHost);
  });

  it("should correctly configure client", () => {
    const expectedHost = "123";
    const client = contact({ host: expectedHost });
    expect(client.config.host).toBe(expectedHost);
  });
});

describe("contact client", () => {
  const config = {
    host: "123",
  };

  let client: ContactClient;

  beforeAll(() => {
    client = new ContactClient(config);
  });

  it("should have contact message service", () => {
    expect(client.messages);
  });

  it("should have expected config", () => {
    expect(client.config).toBe(config);
  });
});
