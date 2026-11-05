---
title: Run tasks on your own machine
description: Link a machine with sprout runner so tasks on your repositories can run there.
sidebar:
  order: 3
---

On paid plans you can link a machine of your own as a **runner**. Tasks on your
own repositories then run there when it's online, instead of on our machines.
Read [Runners](/concepts/runners/) for which tasks can use it.

## 1. Install the Sprout CLI

On Linux or macOS:

```sh
curl -fsSL https://raw.githubusercontent.com/sprout-foundry/sprout/main/scripts/install.sh | sh
```

On Windows (PowerShell):

```powershell
irm https://raw.githubusercontent.com/sprout-foundry/sprout/main/scripts/install.ps1 | iex
```

For the default `container` mode, the machine also needs Docker.

## 2. Link the machine

```sh
sprout runner link
```

This opens a page on Sprout asking you to approve the link; it shows the
machine's name, its operating system and the isolation mode you've chosen on
it. Approve it while signed in to your account. On a machine without a browser
(an SSH session, a server), add `--no-browser` and open the printed link on any
device.

Useful options:

- `--name <name>` — the name shown in your account (default: the machine's
  hostname).
- `--platform <url>` — the Sprout app's address, if you use a different one
  from the default.

## 3. Start it

```sh
sprout runner start
```

The runner runs in the foreground and reports in every 30 seconds. Check it
any time with:

```sh
sprout runner status
```

It also appears under **Account settings → Runners**, as online, busy or
offline.

## Choose how work is isolated

```sh
sprout runner mode container    # default: a hardened container per workspace
sprout runner mode native       # your toolchains, under the OS sandbox
sprout runner mode bare-metal   # your toolchains, no sandbox
```

`bare-metal` gives the work your full user access on the machine — only use it
on a machine set aside for this.
