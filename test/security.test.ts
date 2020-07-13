import axios, { AxiosResponse } from "axios";
import { LoginRequest, SecurityClient, UpdatePasswordRequest } from "../src";

jest.mock("axios");

describe("security service", () => {
  const config = {
    host: "123",
  };

  let axiosMock: any;
  let client: SecurityClient;

  beforeEach(() => {
    axiosMock = axios as jest.Mocked<typeof axios>;
    client = new SecurityClient(config, axiosMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have expected config", () => {
    expect(client.config.host).toBe(config.host);
  });

  it("should successfully authenticate request with credentials", async () => {
    const expectedResponse: AxiosResponse = {
      data: {
        success: true,
        meta: {
          message: "Request completed successfully",
          errorDetails: {},
          schema: {},
        },
        data: {
          idToken: "",
          accessToken: "",
          refreshToken: "",
          tokenType: "",
        },
      },
      status: 200,
      statusText: "OK",
      config: {},
      headers: {},
    };

    axiosMock.post.mockImplementation(() => {
      return expectedResponse;
    });

    const request: LoginRequest = {
      body: {
        username: "username",
        password: "password",
      },
    };

    const response = await client.login(request);

    expect(response).toEqual(expectedResponse);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
  });

  it("should successfully confirm account ", async () => {
    const expectedResponse: AxiosResponse = {
      data: {
        success: true,
        meta: {
          message: "Request completed successfully",
          errorDetails: {},
          schema: {},
        },
        data: {
          idToken: "",
          accessToken: "",
          refreshToken: "",
          tokenType: "",
        },
      },
      status: 200,
      statusText: "OK",
      config: {},
      headers: {},
    };

    axiosMock.post.mockImplementation(() => {
      return expectedResponse;
    });

    const request: UpdatePasswordRequest = {
      body: {
        username: "username",
        oldPassword: "oldPasssword",
        newPassword: "newPassword",
      },
    };

    const response = await client.confirmAccount(request);

    expect(response).toEqual(expectedResponse);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
  });
});
