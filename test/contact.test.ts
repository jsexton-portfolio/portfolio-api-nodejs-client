import axios, { AxiosResponse } from "axios";
import {
  ClientConfig,
  ContactClient,
  CreateContactMessageRequest,
  Reason,
} from "../src";

jest.mock("axios");

describe("message service", () => {
  const config: ClientConfig = {
    host: "123",
    version: "v1.0",
    jwt: "123.jwt.abc",
  };

  let axiosMock: any;
  let client: ContactClient;

  beforeEach(() => {
    axiosMock = axios as jest.Mocked<typeof axios>;
    client = new ContactClient(config, axiosMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should have expected config", () => {
    expect(client.config.host).toBe(config.host);
    expect(client.config.version).toBe(config.version);
    expect(client.config.jwt).toBe(config.jwt);
  });

  it("should successfully create new contact message", async () => {
    const expectedResponse: AxiosResponse = {
      data: {
        success: true,
        meta: {},
        data: {},
      },
      status: 201,
      statusText: "Created",
      config: {},
      headers: {},
    };

    axiosMock.post.mockImplementation(() => {
      return expectedResponse;
    });

    const request: CreateContactMessageRequest = {
      body: {
        message:
          "This is a test message that only need to be longer than 100 characters long. Lets make this just a bit longer so that the database does not complain to us.",
        reason: Reason.Question,
        sender: {
          alias: "Some Alias",
          phone: "1234567890",
          email: "some.alias@gmail.com",
        },
      },
    };

    const response = await client.createMessage(request);

    expect(response).toEqual(expectedResponse);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
  });

  it("should successfully retrieve list of contact messages", async () => {
    const expectedResponse: AxiosResponse = {
      data: {
        success: true,
        meta: {},
        data: {
          count: 1,
          contactMessages: [
            {
              id: "id",
              message: "Test message",
              reason: Reason.Business,
              archived: false,
              responded: false,
              sender: {
                alias: "alias",
                phone: "1234567890",
                email: "test@email.com",
                ip: "127.0.0.1",
                userAgent: "Chrome",
              },
              readers: [],
              timeCreated: new Date(),
              timeUpdated: new Date(),
            },
          ],
        },
      },
      status: 200,
      statusText: "Ok",
      config: {},
      headers: {},
    };

    axiosMock.get.mockImplementation(() => {
      return expectedResponse;
    });

    const response = await client.findMessages();

    expect(response).toEqual(expectedResponse);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
