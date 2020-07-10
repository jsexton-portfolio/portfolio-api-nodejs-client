import axios, { AxiosResponse } from "axios";
import { ContactClient, CreateContactMessageRequest, Reason } from "../src";

jest.mock("axios");

describe("message service", () => {
  const config = {
    host: "123",
  };

  const axiosResponse: AxiosResponse = {
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

  let axiosMock: any;
  let client: ContactClient;

  beforeAll(() => {
    axiosMock = axios as jest.Mocked<typeof axios>;
    axiosMock.post.mockImplementation(() => {
      return axiosResponse;
    });

    client = new ContactClient(config, axiosMock);
  });

  it("should have expected config", () => {
    expect(client.config).toBe(config);
  });

  it("should successfully create new contact message", async () => {
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

    expect(response).toEqual(axiosResponse);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    // TODO: Enhance mocking to be able to test what the mock was called with.
  });
});
