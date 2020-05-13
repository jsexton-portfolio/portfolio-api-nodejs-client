import { AxiosRequestConfig } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PortfolioRequest<T = any> {
  version?: string;
  body?: T;
  jwt?: string;
}

export const axiosRequestConfig = <T>(
  request: PortfolioRequest<T>
): AxiosRequestConfig => {
  const headers: { [k: string]: string } = {};

  if (request.jwt) {
    headers["Authorization"] = `Bearer ${request.jwt}`;
  }

  if (request.version) {
    headers["X-PORTFOLIO-VERSION"] = request.version;
  }

  return {
    headers: {
      ...headers,
    },
  };
};
