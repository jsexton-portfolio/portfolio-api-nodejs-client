export interface Entity {
  id: string;
}

export interface ContactMessage extends Entity {
  message: string;
  reason: Reason;
  responded: boolean;
  archived: boolean;
  sender: Sender;
  readers: Reader[];
  timeCreated: Date;
  lastUpdated: Date;
}

export enum Reason {
  // TODO: In future API releases, case will not matter
  Business = "business",
  Question = "question",
  Feedback = "feedback",
  Other = "other",
}

export interface Sender {
  alias: string;
  email: string;
  phone?: string;
}

export interface Reader extends Entity {
  flagged: boolean;
  lastReadTime: Date;
}
