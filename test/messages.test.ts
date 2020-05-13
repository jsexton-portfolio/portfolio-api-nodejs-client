import axios, { AxiosResponse } from "axios";
import {
  ContactMessageService,
  CreateContactMessageRequest,
  Reason,
} from "../src";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let axiosMock: any;
  let service: ContactMessageService;

  beforeAll(() => {
    axiosMock = axios as jest.Mocked<typeof axios>;
    axiosMock.post.mockImplementation(() => {
      return axiosResponse;
    });

    service = new ContactMessageService(config, axiosMock);
  });

  it("should have expected config", () => {
    expect(service.config).toBe(config);
  });

  it("should successfuly create new contact message", async () => {
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

    const response = await service.create(request);

    expect(response).toEqual(axiosResponse);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    // TODO: Enhance mocking to be able to test what the mock was called with.
  });
});
