---
title: Use your own model keys
description: Bring your own provider keys to the Developer workspace; calls made with them use no credits.
sidebar:
  order: 2
---

In the **Developer workspace** you can use your own API key for any provider
Sprout supports. Model calls made there with your key go to the provider **on
your account**, and use **no credits** — your provider bills you directly.

Tasks and Sprout's conversations run on Sprout Foundry's managed models, which use
credits.

## Add a key

1. Open **Account settings → Keys & providers**.
2. Choose the provider and paste your key.

The providers you can choose are listed on that page.

## Good to know

- Your key is encrypted at rest and used only for your model calls.
- Time on our machines still uses credits, with your key or without. See
  [Credits](/concepts/credits/).
- To keep a key from ever leaving your own machine, run the open-source agent
  yourself instead.
