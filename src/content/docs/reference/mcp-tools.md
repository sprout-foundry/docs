---
title: MCP tools
description: Every tool Sprout's MCP server offers, with its inputs and the token scope it needs.
sidebar:
  order: 1
---

Sprout's MCP server is at `/mcp` on the app's address, authenticated with an
[access token](/reference/access-tokens/) as a bearer token. A project can be
named by its id, its name, or its repository URL (from `list_projects`).

## Projects

### `list_projects`

The account's projects: id, name, repository URL, and whether its workspace is
running. **Scope:** `projects:read`. **Inputs:** none.

## Adding work

### `add_tasks`

Hand one or more tasks to a project. The first starts now if the project is
idle; the rest wait their turn in order. Returns each task's id (started) or
queue id and position (waiting). **Scope:** `tasks:write`.

| Input | Description |
|---|---|
| `project` (required) | The project. |
| `tasks` (required) | The tasks, in the order they should run. Each is a brief (a string), or an object with `brief` (what to do), `done_when` (what must be true when done), `after` (indexes of earlier tasks in this list that must finish first) and `parallel` (it touches different parts of the project, so it may run beside other parallel tasks, up to the plan's run limit). |
| `state` | `ready` (default) — they run in turn; or `shaping` — they go on the board for a person to look at, and nothing starts. |
| `feature` | A name for the feature these tasks build together: one card on the board, run in order, sharing a budget (and a branch and pull request on GitHub or GitLab). |
| `budget_credits` | A credit budget for the feature (needs `feature`). |

## Following work

### `list_tasks`

A project's recent tasks (newest first) and the ones waiting their turn.
**Scope:** `tasks:read`. **Inputs:** `project` (required); `status` (only tasks
in this [state](/concepts/tasks/#task-states)); `limit` (1–50, default 20).

### `get_task`

A task's state, what it was asked, the plain-words summary of what it did, the
files it changed, where its changes landed, and the credits it used.
**Scope:** `tasks:read`. **Inputs:** `task_id` (required).

### `get_task_diff`

The unified diff of a finished task's changes, cut at about 100 KB (with a note
when cut). **Scope:** `tasks:read`. **Inputs:** `task_id` (required).

### `get_task_logs`

The end of what the agent wrote while it worked on the task — its own report,
for when the summary isn't enough. **Scope:** `tasks:read`. **Inputs:**
`task_id` (required).

### `wait_for_tasks`

Wait (up to about a minute) until any of the given tasks changes state or
finishes, then return their states. Call it again to keep waiting; use it
instead of polling `get_task`. **Scope:** `tasks:read`. **Inputs:** `task_ids`
(required, 1–50); `timeout_seconds` (1–55, default 55).

## Steering work

### `cancel_task`

Stop a task that is starting or running. **Scope:** `tasks:write`. **Inputs:**
`task_id` (required).

### `retry_task`

Run a task that didn't work again, ahead of the project's queue. A task that
stopped partway (out of time) continues from the work it had done.
**Scope:** `tasks:write`. **Inputs:** `task_id` (required).

### `answer_task`

A task that stopped to ask (state `needs_input`; its question is in
`get_task`) continues with this answer. **Scope:** `tasks:write`. **Inputs:**
`task_id`, `answer` (both required).

### `move_queued`

Move a card that hasn't started (by its queue id) to `shaping` (it waits for a
person) or `ready` (it runs in turn; on an idle project it starts).
**Scope:** `tasks:write`. **Inputs:** `queue_id`, `state` (both required).

### `remove_queued`

Take a task that hasn't started out of the project's queue, by its queue id.
**Scope:** `tasks:write`. **Inputs:** `queue_id` (required).

### `start_queued`

Start a waiting task now, by its queue id — for when the queue has stopped after
a task that didn't work. **Scope:** `tasks:write`. **Inputs:** `project`,
`queue_id` (both required).

### `set_budget`

Set the credits a feature or a task may spend, including its retries, fixes and
answered continuations. When it's used up the work pauses with the reason
shown: waiting tasks in the feature don't start, and a running task's next model
call is refused. `0` removes the budget. **Scope:** `tasks:write`. **Inputs:**
`project`, `credits` (both required); `feature` or `task_id`.

### `open_change_request`

For a project on GitHub or GitLab, open the pull request for a finished task's
changes. **Scope:** `tasks:write`. **Inputs:** `task_id` (required).
