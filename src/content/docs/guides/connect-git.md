---
title: Connect a git host
description: Work on your own repositories from GitHub, GitLab or Codeberg.
sidebar:
  order: 1
---

Connect the accounts that hold your code to list your repositories, run tasks
on them and open pull requests. Open **Account settings → Git connections**.
You can connect any of them, whichever way you signed in.

## GitHub

Choose **Connect** next to GitHub and approve access on GitHub.

## GitLab and Codeberg

Create a personal access token on the host with **repository read and write
access**, then paste it next to the host under **Git connections**. Sprout
checks the token with the host before saving it.

## How tasks use your repository

- A task works on the repository **as it is on its remote** — push your local
  changes before you hand a task over.
- For a finished task on GitHub or GitLab, you can open a pull request with its
  changes.

## Disconnect

Choose **Disconnect** next to the host. Sprout forgets the token and the list
of repositories it had read from that host.

## Don't see your git host?

Tell us which one from **Account settings → Support** and we'll consider it
for the roadmap.
