import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BaseClient, ClientConfig, PortfolioResponse } from "../../common";
import { axiosRequestConfig, PortfolioRequest } from "../../common/request";
import { TokenBody } from "./models";

export type LoginRequest = PortfolioRequest<LoginForm>;

export interface LoginForm {
  username: string;
  password: string;
}

export type LoginResponse = PortfolioResponse<TokenBody>;

export type UpdatePasswordRequest = PortfolioRequest<UpdatePasswordForm>;

export interface UpdatePasswordForm {
  username: string;
  oldPassword: string;
  newPassword: string;
}

export class SecurityClient extends BaseClient {
  constructor(config: ClientConfig, axiosInstance: AxiosInstance = axios) {
    super(config, axiosInstance);
  }

  login(request: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    const url = `${this.config.host}/login`;
    const config = axiosRequestConfig(request);

    return this.axiosInstance.post<LoginResponse>(url, request.body, config);
  }

  confirmAccount(
    request: UpdatePasswordRequest
  ): Promise<AxiosResponse<LoginResponse>> {
    const url = `${this.config.host}/confirm-account`;
    const config = axiosRequestConfig(request);

    return this.axiosInstance.post<LoginResponse>(url, request.body, config);
  }
}
