---
title: Get started as a developer
description: Your first task on your own repository, the task board, and driving Sprout from your own tools.
sidebar:
  order: 2
---

Sprout runs your tasks with an open-source agent, in an isolated workspace — not
on your laptop. You work on your own repositories, use your own model keys in
the Developer workspace if you like, and hand tasks over from your own coding
tools.

## 1. Choose "Code with an agent"

When you sign up, choose **Code with an agent**. Your account lands on your
projects and the developer views. You can switch between the two later.

## 2. Connect your git host

Open **Account settings → Git connections** and connect GitHub, or add a
personal token for GitLab or Codeberg. See
[Connect a git host](/guides/connect-git/).

Tasks work on the repository **as it is on its remote**, so push your local
changes before you hand a task over.

## 3. Run your first task

Open a repository as a project, describe a change, and choose **Run** to start it
as one task — or **Plan** to have Sprout read the code and propose a task list
you can edit before it runs.

Follow your tasks on the **board**: **Shaping** (ideas to look at before they
run), **Ready** (they run in turn), **Running**, **Needs you** (a question to
answer, or something that didn't work) and **Done**. Each task shows what it
cost, its summary, the files it changed and the full diff.

## 4. Bring your own keys (optional)

Add your provider keys under **Account settings → Keys & providers**. Model
calls made with your own key in the Developer workspace go to your provider,
on your account, and use no credits; tasks run on Sprout's managed models.
See [Use your own model keys](/guides/bring-your-own-keys/).

## 5. Drive it from your tools (Pro)

Create an access token and add the MCP server to Claude Code, Cursor or any
other MCP client; your tool can then list projects, add tasks, wait for them
and read their results and diffs. See
[Connect your coding agent](/guides/connect-your-agent/).

## 6. Run tasks on your own machine (Lite and up)

Link a machine with `sprout runner` and tasks can run there instead of on ours.
See [Run tasks on your own machine](/guides/own-runner/).
