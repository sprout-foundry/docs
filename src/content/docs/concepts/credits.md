---
title: Credits
description: How Sprout is paid for — one prepaid pool of credits, no surprise bills.
sidebar:
  order: 3
---

Sprout uses **credits**: one prepaid pool that pays for what runs on your
behalf. Current prices and allowances are on the
[pricing page](/pricing/).

## What uses credits

- **Managed models** — model calls on the models Sprout provides.
- **Workspaces and tasks** — time on our machines, including when you use your
  own model keys.
- **Traffic to live apps** — requests beyond your plan's included allowance.

Rates depend on the model and the machine, and are shown before work runs. Each
task shows what it cost.

## What doesn't

- **Model calls with your own key** in the Developer workspace cost no
  credits — your provider bills you directly. See
  [Use your own model keys](/guides/bring-your-own-keys/).
- **Running the open-source agent yourself** uses no credits at all.

## Allowances and packs

- **Paid plans** (Lite, Pro) include a monthly allowance that refreshes every
  billing cycle.
- **Credit packs** are bought once and never expire. Your monthly allowance is
  always used first, so packs only cover what goes beyond it.
- **The Free plan** has a hard cap: when it runs out, nothing is charged and
  work pauses. Upgrade, or run the open-source agent yourself with your own
  model keys.

There's no metered overage. When your allowance and packs run out, work pauses
until you buy a pack or your allowance refreshes.

## Keeping spending in check

- Set a **credit budget** on a feature or a task with the `set_budget`
  [MCP tool](/reference/mcp-tools/); work pauses with the reason shown when it's
  used up.
- Set a **daily credit cap** on your usage page to stop one heavy day from
  eating the month. When it's reached, managed-model use pauses until midnight
  UTC, and you can resume for the rest of the day from the same page.
- Your account's usage page shows your allowance, packs and pace, and warns you
  as you approach the end of your allowance.
