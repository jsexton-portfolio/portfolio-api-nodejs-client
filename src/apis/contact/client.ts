import { ClientConfig, Configurable } from "../../common/config";
import { ContactMessageService } from "./messages";

export class ContactClient implements Configurable {
  readonly config: ClientConfig;
  readonly messages: ContactMessageService;

  constructor(config: ClientConfig) {
    this.config = config;
    this.messages = new ContactMessageService(config);
  }
}
