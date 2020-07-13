import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BaseClient, ClientConfig } from "../../common/client";
import {
  PortfolioRequest,
  RequestWithBody,
  RequestWithParameters,
} from "../../common/request";
import { PortfolioResponse } from "../../common/response";
import {
  ContactMessage,
  ContactMessageCollection,
  Reason,
  Sender,
} from "./models";

export interface CreateContactMessageForm {
  message: string;
  reason: Reason;
  sender: Sender;
}

export type CreateContactMessageRequest = RequestWithBody<
  CreateContactMessageForm
>;

export interface GetContactMessageRequest extends PortfolioRequest {
  id: string;
}

export interface GetContactMessageQueryParameters {
  reason?: Reason;
  archived?: boolean;
  responded?: boolean;
}

export type GetContactMessagesRequest = RequestWithParameters<
  GetContactMessageQueryParameters
>;

export type ContactMessageResponse = PortfolioResponse<ContactMessage>;

export type ContactMessagesResponse = PortfolioResponse<
  ContactMessageCollection
>;

/**
 * Client used to interface with contact API
 */
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
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/contact/mail`;

    return this.axiosInstance.post<ContactMessageResponse>(url, request.body, {
      headers: config.headers,
    });
  }

  /**
   * Retrieves a specific contact message by id
   *
   * @param request
   */
  findMessage(
    request: GetContactMessageRequest
  ): Promise<AxiosResponse<ContactMessageResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/contact/mail/${request.id}`;

    return this.axiosInstance.get<ContactMessageResponse>(url, {
      headers: config.headers,
    });
  }

  /**
   * Retrieves multiple contact messages
   *
   * @param request
   */
  findMessages(
    request?: GetContactMessagesRequest
  ): Promise<AxiosResponse<ContactMessagesResponse>> {
    const config = this.config.merge(request as PortfolioRequest);
    const url = `${config.host}/contact/mail`;

    return this.axiosInstance.get<ContactMessagesResponse>(url, {
      params: request !== undefined ? request.queryParameters : {},
      headers: config.headers,
    });
  }
}
