---
title: Use your own model keys
description: Run your tasks, Sprout and the Developer workspace on your own provider keys; calls made with them use no credits.
sidebar:
  order: 2
---

You can use your own API key or endpoint for any provider Sprout supports.
Model calls made with your key go to the provider **on your account**, and use
**no credits** — your provider bills you directly.

## Add a key

1. Open **Account settings → Keys & providers**.
2. Choose the provider and paste your key.

The providers you can choose are listed on that page.

## Choose where your work runs

Open **Account settings → Models** and choose, for **Tasks** and for
**Sprout**, a model on your own key. Once you do, every model call for that
work goes to your key: a task's run, its review and its summary, and Sprout's
plans, answers and checks. A call your key can't serve fails and says why; it
is never moved to Sprout Foundry's models.

One check always runs on Sprout Foundry's models: the check of a project's
files before they go online.

The **Developer workspace** uses the model chosen in its own settings, and its
code completion follows that choice.

## Sprout Foundry's models

Left on **Auto**, your work runs on Sprout Foundry's managed models, which use
credits: open-weight models chosen for coding value per dollar, on Sprout
Foundry's own GPUs or on providers whose no-training terms it has verified.
They change as better ones come along, and your activity trail names the model
that handled each call. If a model or its origin matters to you, choose a model
on your own key, or run the open-source agent yourself with any model.

## Good to know

- Your key is encrypted at rest and used only for your model calls.
- Time on our machines still uses credits, with your key or without. See
  [Credits](/concepts/credits/).
- To keep a key from ever leaving your own machine, run the open-source agent
  yourself instead.
