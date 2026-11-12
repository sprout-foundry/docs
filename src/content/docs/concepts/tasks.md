---
title: Tasks and the queue
description: How work runs in Sprout — one task at a time per project, reviewed before it lands.
sidebar:
  order: 2
---

A **task** is one self-contained change: what to change, where, and how to know
it's done. Everything Sprout builds, it builds as tasks.

## Where tasks run

Tasks run on machines — ours, or [your own](/guides/own-runner/) — each in its
own isolated workspace. They don't depend on your browser: close the tab and the
work carries on.

A task works on the project's repository **as it is on its remote**. If you work
on your own repository, push your local changes before you hand a task over.

## The queue

Each project runs its tasks **in order, one at a time** — except that tasks
marked to run alongside others can fill your plan's run limit, so a paid plan
may run two at once. A task asked for while another is running waits its turn
and starts when the one before it is done. See the
[pricing page](/pricing/) for each plan's limit.

You can start up to 10 tasks a minute. A start beyond that is refused with a
message that says how many seconds to wait before trying again.

On the board, cards move through:

| Column | What it means |
|---|---|
| **Shaping** | Ideas you or Sprout want to look at before they run. Nothing starts from here; make a card ready when it says what you want. |
| **Ready** | These run one after another, in this order, when nothing else is running. On plans with more than one run at a time, tasks marked to run alongside others start side by side. |
| **Running** | Being built, checked and reviewed right now. |
| **Needs you** | Stopped for you: a question to answer, or something that didn't work, with what to do next. |
| **Done** | Finished and added to your project. |

## Reviewed before it lands

When a task finishes, its change is reviewed — and fixed when the review finds a
problem — before it's added to your project. Each task then shows a plain-words
summary of what happened, the files it changed, and the full diff for
developers.

## Questions

A task can stop to ask you something (it shows under **Needs you**). Answer it,
and the task continues from the work it had already done.

## Features and budgets

Tasks that build one feature together can share a **feature** name: they appear
as one card, run in order, and can share a **credit budget**. When a budget is
used up, the work pauses and shows why — waiting tasks in the feature don't
start. Budgets are set through the [MCP tools](/reference/mcp-tools/)
(`set_budget`).

## Task states

Tools and the API report a task's state as one of: `pending`, `running`,
`completed`, `failed`, `error` (it stopped with an internal fault), `timeout`,
`cancelled`, `needs_input` (waiting on an answer), `revising` (a review fix is
under way) or `handed_off` (stopped at its time limit; its next run carries on).
