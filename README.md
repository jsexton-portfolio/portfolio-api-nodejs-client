# Portfolio API NodeJS Client

NodeJS client used to interface with Portfolio APIs.

## Usage

### Contact Message Creation

```ts
import {
  contact,
  Reason,
  CreateContactMessageRequest,
} from "portfolio-api-client";

const client = contact();

const request: CreateContactMessageRequest = {
  body: {
    message: "...",
    reason: Reason.Question,
    sender: {
      alias: "...",
      phone: "...",
      email: "...",
    },
  },
};

// The response entity returned from the web service
const response = await client.messages.create(request);

// The response body
const responseBody = response.data;

// The newly created message
const message = responseBody.data;
```
