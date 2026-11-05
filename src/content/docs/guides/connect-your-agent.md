---
title: Connect your coding agent
description: Add Sprout's MCP server to Claude Code, Cursor, VS Code or any other MCP client, and hand tasks to your projects.
sidebar:
  order: 4
---

Sprout has an MCP server, so your own coding tool can list your projects, add
tasks, wait for them and read their results and diffs. Any client that speaks
MCP works — Claude Code, Cursor, VS Code, Windsurf, or an agent you've written
yourself. Available on the Pro plan.

## 1. Create an access token

Open **Account settings → Developer**, describe what the token is for (for
example *"Claude Code on my laptop"*) and choose **Create token**. Copy it
now — it's shown only once. See [Access tokens](/reference/access-tokens/).

## 2. Add the server

Every client needs the same two things: the server address, and the token as a
bearer token. The Developer page shows your server's address.

**Claude Code** — run the command the Developer page gives you; it looks like
this:

```sh
claude mcp add --transport http sprout-foundry https://<app-address>/mcp \
  --header "Authorization: Bearer <your-token>"
```

**Other clients** — add a remote MCP server with streamable HTTP transport,
named anything you like, at `https://<app-address>/mcp`, with an
`Authorization: Bearer <your-token>` header. Most clients take this as JSON:

```json
{
  "mcpServers": {
    "sprout-foundry": {
      "type": "http",
      "url": "https://<app-address>/mcp",
      "headers": { "Authorization": "Bearer <your-token>" }
    }
  }
}
```

## 3. Hand over work

Ask your tool in plain words, for example *"List my Sprout projects, then add a
task to the shop project to add a contact form, and wait for it."* The tool
uses Sprout's [MCP tools](/reference/mcp-tools/): `list_projects`, `add_tasks`,
`wait_for_tasks`, `get_task` and `get_task_diff` cover most work.

## Tips

- Tasks see the repository **as it is on its remote**: push before you add a
  task.
- Write each task as a self-contained brief — what to change, where, and how to
  check it — and say what "done" means.
- Group the tasks that build one feature under a `feature` name, and give it a
  `budget_credits` to cap what it can spend.
- Use `wait_for_tasks` instead of polling `get_task` — and check the states it
  returns, since a task that stops to ask you something counts as finished.
