# Portfolio API NodeJS Client

![](https://github.com/jsexton-portfolio/portfolio-api-nodejs-client/workflows/build/badge.svg)

DEPRECATED AND READ ONLY!

NodeJS client used to interface with Portfolio APIs.

## Installation

`npm i @jsextonn/portfolio-api-client`

Note: Package is currently not distributed with minified version.

## Usage

### Contact Message Creation

```ts
import {
  portfolio,
  Reason,
  CreateContactMessageRequest,
} from "@jsextonn/portfolio-api-client";

const client = portfolio();

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
const response = await client.contact.createMessage(request);

// The response body
const responseBody = response.data;

// The newly created message, if successful
const message = responseBody.data;
```

### Login

```ts
import { portfolio, LoginRequest } from "@jsextonn/portfolio-api-client";

const client = portfolio();

const request: LoginRequest = {
  body: {
    username: "username",
    password: "password",
  },
};

// The response entity returned from the web service
const response = await client.security.login(request);

// The response body
const responseBody = response.data;

// The authentication tokens, if successful
const message = responseBody.data;
```

### Confirm Account

```ts
import {
  portfolio,
  UpdatePasswordRequest,
} from "@jsextonn/portfolio-api-client";

const client = portfolio();

const request: UpdatePasswordRequest = {
  body: {
    username: "username",
    oldPassword: "oldPassword",
    newPassword: "newPassword",
  },
};

// The response entity returned from the web service
const response = await client.security.confirmAccount(request);

// The response body
const responseBody = response.data;

// The authentication tokens, if successful
const message = responseBody.data;
```
