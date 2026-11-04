---
title: Security and data
description: How Sprout isolates work, what it records, and where data lives — for you and your security reviewers.
sidebar:
  order: 1
---

This page is the short version for anyone reviewing Sprout: what it does to
keep your work and your data safe, and how you can check.

## An agent you can read

The agent that does the work is open source under Apache-2.0
([sprout-foundry/sprout](https://github.com/sprout-foundry/sprout)). Anyone can
read what it does before trusting it, and run it themselves.

## Isolation

- Every task runs in its **own isolated workspace**, never on your machine.
- A short list of **catastrophic commands** (for example wiping the root file
  system or formatting a disk) is always blocked, whatever the settings.
- If you link [your own runner](/concepts/runners/), you choose how it isolates
  work on your machine: a hardened container (default), the operating system's
  sandbox, or none.

## Review before changes land

Each task's change is reviewed — and fixed when the review finds a problem —
before it's added to your project. Every change is recorded in the project's
git history.

## The audit trail

Under **Account settings → Activity & audit**, each account sees what was
recorded for it: **model calls** (provider, model, role, token counts) and
**security events**, filterable by project, time and provider. Team owners see
the same for their team.

## Data location and retention

- Workspaces and project data are hosted in the **United States and Canada**.
- With [Private compute](/guides/private-compute/) (Pro and Team add-on),
  managed model calls go only to **zero-data-retention** models, and work runs
  only on Sprout's own machines.
- Calls made with [your own model keys](/guides/bring-your-own-keys/) go to your
  provider under your own agreement with them.

## Keys and tokens

- Your model keys are encrypted at rest and used only for your model calls.
- Access tokens are stored only as a hash, carry limited
  [scopes](/reference/access-tokens/), and can be revoked at once.

## Reporting a vulnerability

Email the security contact listed on the Sprout website. Please don't open a
public issue for a vulnerability.
