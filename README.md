# Portfolio API NodeJS Client

![](https://github.com/jsexton-portfolio/portfolio-api-nodejs-client/workflows/build/badge.svg)

NodeJS client used to interface with Portfolio APIs.

## Installation

`npm i @jsextonn/portfolio-api-client`

Note: Version `0.1.x` is not distributed with minified version.

## Usage

### Contact Message Creation

```ts
import {
  contact,
  Reason,
  CreateContactMessageRequest,
} from "@jsextonn/portfolio-api-client";

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
