# AGENTS.md — sprout-foundry docs

Public documentation site (Astro Starlight). This repository is **public**:
nothing here may name internal hosts, private repositories, account handles,
tokens or unreleased plans.

## Writing rules

- **Only what the product does today.** Every statement about Sprout must trace
  to code that ships and that a person can actually reach (a screen, a command,
  an MCP tool). Claims follow the company's claims register (kept with the
  business records, not in this repository): a claim not verified there does
  not go in the docs. Roadmap items are absent, not "coming".
- **Numbers come from one place.** Prices, allowances and plan limits live in
  the pricing contract and the pricing page; link `/pricing/` instead of
  repeating them.
- **No domains in pages.** Link docs pages by path; the product site through
  the `/pricing/`-style redirects in `astro.config.mjs` (MARKETING_URL). Code
  samples use placeholders like `<app-address>`.
- **Diátaxis.** Put a page where its question belongs (see README): a tutorial
  teaches, a guide does one task, a concept explains, a reference lists exactly.
- **Plain words.** Builder pages avoid developer vocabulary; developer pages may
  use it. Name screens and buttons exactly as the app labels them.

## Build

`npm ci` needs `NODE_AUTH_TOKEN` (GitHub Packages). The lockfile is generated on
Linux so CI's `npm ci` accepts it; if you add a dependency on macOS, regenerate
it in a `node:24` container (`npm install --package-lock-only`).
