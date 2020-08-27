import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BaseClient, ClientConfig, PortfolioResponse } from "../../common";
import { PortfolioRequest, RequestWithBody } from "../../common/request";
import { TokenBody } from "./models";

export type LoginRequest = RequestWithBody<LoginForm>;

export interface LoginForm {
  username: string;
  password: string;
}

export type LoginResponse = PortfolioResponse<TokenBody>;

export type UpdatePasswordRequest = RequestWithBody<UpdatePasswordForm>;

export interface UpdatePasswordForm {
  username: string;
  oldPassword: string;
  newPassword: string;
}

export type RefreshTokenRequest = RequestWithBody<RefreshTokenForm>;

export interface RefreshTokenForm {
  refreshToken: string;
}

export type InitializeForgotPasswordRequest = RequestWithBody<
  InitializeForgotPasswordForm
>;

export interface InitializeForgotPasswordForm {
  username: string;
}

export type ConfirmForgotPasswordRequest = RequestWithBody<
  ConfirmForgotPasswordForm
>;

export interface ConfirmForgotPasswordForm {
  username: string;
  newPassword: string;
  confirmationCode: string;
}

export class SecurityClient extends BaseClient {
  constructor(config: ClientConfig, axiosInstance: AxiosInstance = axios) {
    super(config, axiosInstance);
  }

  login(request: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/security/login`;

    return this.axiosInstance.post<LoginResponse>(url, request.body, {
      headers: config.headers,
    });
  }

  confirmAccount(
    request: UpdatePasswordRequest
  ): Promise<AxiosResponse<LoginResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/security/confirm-account`;

    return this.axiosInstance.post<LoginResponse>(url, request.body, {
      headers: config.headers,
    });
  }

  refresh(request: RefreshTokenRequest): Promise<AxiosResponse<LoginResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/security/refresh`;

    return this.axiosInstance.post<LoginResponse>(url, request.body, {
      headers: config.headers,
    });
  }

  initForgotPassword(
    request: InitializeForgotPasswordRequest
  ): Promise<AxiosResponse<PortfolioResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/security/init-forgot-password`;

    return this.axiosInstance.post<PortfolioResponse>(url, request.body, {
      headers: config.headers,
    });
  }

  confirmForgotPassword(
    request: ConfirmForgotPasswordRequest
  ): Promise<AxiosResponse<PortfolioResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/security/confirm-forgot-password`;

    return this.axiosInstance.post<PortfolioResponse>(url, request.body, {
      headers: config.headers,
    });
  }
}
