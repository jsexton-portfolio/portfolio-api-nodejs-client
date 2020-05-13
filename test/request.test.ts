import { axiosRequestConfig, PortfolioRequest } from "../src/common/request";

describe("create axios config", () => {
  it("should correctly attach jwt as bearer token header", () => {
    const token = "123.abc.jwt";
    const request: PortfolioRequest = {
      jwt: token,
    };

    const config = axiosRequestConfig(request);

    expect(config.headers["Authorization"]).toEqual(`Bearer ${token}`);
  });

  it("should correctly attach version to custom header", () => {
    const version = "v1";
    const request: PortfolioRequest = {
      version: version,
    };

    const config = axiosRequestConfig(request);

    expect(config.headers["X-PORTFOLIO-VERSION"]).toEqual(version);
  });
});
