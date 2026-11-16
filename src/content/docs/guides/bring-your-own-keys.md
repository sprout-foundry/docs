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
credits. Today these are open-weight models: Qwen3.8 on Sprout Foundry's own
GPUs, with DeepSeek V4.1 Flash on a zero-data-retention provider when more
capacity is needed, both in the US. Both come from Chinese labs; they run on Sprout Foundry's
hardware or its provider's, and your work never goes to the labs that made
them. If a model's origin matters to you, use your own key in the Developer
workspace, or run the open-source agent yourself with any model.

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
