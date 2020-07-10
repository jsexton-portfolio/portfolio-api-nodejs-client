import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BaseClient, ClientConfig } from "../../common/client";
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

export class ContactClient extends BaseClient {
  constructor(config: ClientConfig, axiosInstance: AxiosInstance = axios) {
    super(config, axiosInstance);
  }

  /**
   * Creates a new contact message
   *
   * @param request Sent to portfolio API
   */
  createMessage(
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
