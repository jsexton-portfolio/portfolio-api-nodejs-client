import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ClientConfig, Configurable } from "../../common/config";
import { axiosRequestConfig, PortfolioRequest } from "../../common/request";
import { PortfolioResponse } from "../../common/response";
import { ContactMessage, Reason, Sender } from "./models";

export type CreateContactMessageRequest = PortfolioRequest<
  CreateContactMessageForm
>;

export interface CreateContactMessageForm {
  message: string;
  reason: Reason;
  sender: Sender;
}

export type ContactMessageResponse = PortfolioResponse<ContactMessage>;

export class ContactMessageService implements Configurable {
  readonly config: ClientConfig;
  private readonly axiosInstance: AxiosInstance;

  constructor(config: ClientConfig, axiosInstance: AxiosInstance = axios) {
    this.config = config;
    this.axiosInstance = axiosInstance;
  }

  /**
   * Creates a new contact message
   *
   * @param request Sent to portfolio API
   */
  create(
    request: CreateContactMessageRequest
  ): Promise<AxiosResponse<ContactMessageResponse>> {
    const url = `${this.config.host}/mail`;
    const config = axiosRequestConfig(request);

    return this.axiosInstance.post<ContactMessageResponse>(
      url,
      request.body,
      config
    );
  }
}
