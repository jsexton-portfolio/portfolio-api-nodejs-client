import axios, { AxiosResponse } from "axios";
import { LoginRequest, SecurityClient } from "../src";

jest.mock("axios");

describe("security service", () => {
  const config = {
    host: "123",
  };

  const axiosResponse: AxiosResponse = {
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
        refereshToken: "",
        tokenType: "",
      },
    },
    status: 200,
    statusText: "OK",
    config: {},
    headers: {},
  };

  let axiosMock: any;
  let client: SecurityClient;

  beforeAll(() => {
    axiosMock = axios as jest.Mocked<typeof axios>;
    axiosMock.post.mockImplementation(() => {
      return axiosResponse;
    });

    client = new SecurityClient(config, axiosMock);
  });

  it("should have expected config", () => {
    expect(client.config).toBe(config);
  });

  it("should successfully authenticate request with credentials", async () => {
    const request: LoginRequest = {
      body: {
        username: "username",
        password: "password",
      },
    };

    const response = await client.login(request);

    expect(response).toEqual(axiosResponse);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    // TODO: Enhance mocking to be able to test what the mock was called with.
  });
});
