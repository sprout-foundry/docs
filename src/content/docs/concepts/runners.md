---
title: Runners
description: Where tasks run — on our machines, or on a machine of your own.
sidebar:
  order: 4
---

A **runner** is a machine that runs tasks. By default your tasks run on ours,
each in its own isolated workspace. On paid plans you can also link a machine
of your own with `sprout runner` — see
[Run tasks on your own machine](/guides/own-runner/).

## Which runner a task uses

- A task on **one of your own repositories** (GitHub, GitLab, Codeberg) goes to
  your linked runner when it's online and has free capacity, and to our
  machines otherwise.
- A task on a **project Sprout hosts** always runs on our machines: a runner of
  your own can't reach the platform's internal repositories.

## How your runner isolates work

Your runner runs workspaces in one of three modes, chosen on the machine with
`sprout runner mode`:

| Mode | What it does |
|---|---|
| `container` (default) | Each workspace runs in a hardened container. |
| `native` | Your own toolchains, under the operating system's sandbox (Seatbelt on macOS, bubblewrap on Linux). |
| `bare-metal` | Your own toolchains with no sandbox — the work has your full user access. Choose it deliberately. |

## Capacity and status

A runner reports in every 30 seconds. It shows as **online** when it has room
for another task, **busy** when it's at capacity, and **offline** when it hasn't
reported for two minutes. How many runners you can link depends on your plan.
