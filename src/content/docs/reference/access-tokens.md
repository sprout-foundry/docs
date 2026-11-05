---
title: Access tokens
description: Personal access tokens for the MCP server and your own tools.
sidebar:
  order: 2
---

A **personal access token** lets a tool act on your account without your
password — for example your coding agent through the
[MCP server](/guides/connect-your-agent/).
Access tokens are available on the Pro plan.

A token is also a **git credential**: paste it as the password when cloning or
pushing to a platform project over HTTPS.

## Create and revoke

- Create a token under **Account settings → Developer**. Give it a name that
  says what it's for. The token is shown **once**; copy it then.
- The token list shows each token's prefix, when it was created, when it was
  last used and when it expires.
- Choose **Revoke** to stop a token at once; anything using it stops working.

Tokens are stored only as a hash: Sprout can't show a token again after it's
created.

## Scopes

A token carries scopes that limit what it can do. A token created from
**Account settings → Developer** gets every scope below.

| Scope | Allows |
|---|---|
| `projects:read` | Listing your projects. |
| `tasks:read` | Reading tasks: their state, summary, diff and output, and waiting on them. |
| `tasks:write` | Adding, cancelling, retrying, answering and reordering tasks; setting budgets; opening pull requests. |
| `git:read` | Cloning and fetching a platform project over HTTPS. |
| `git:write` | Pushing to a platform project over HTTPS. |

Each [MCP tool](/reference/mcp-tools/) lists the scope it needs.

## Using a token

Send it as a bearer token:

```http
Authorization: Bearer <your-token>
```
