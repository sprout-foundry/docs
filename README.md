# Sprout Foundry docs

The documentation for [Sprout Foundry](https://github.com/sprout-foundry): how
to build with Sprout, for builders and developers. Built with
[Astro Starlight](https://starlight.astro.build) and the shared Sprout design
tokens.

## Contributing

Found something wrong or missing? Use **Edit page** at the bottom of any page,
or open an issue. Every page is a markdown file under `src/content/docs/`.

The docs follow [Diátaxis](https://diataxis.fr):

| Folder | Kind | Answers |
|---|---|---|
| `start/` | Tutorials | "Get me going" |
| `concepts/` | Explanation | "How does it work?" |
| `guides/` | How-to | "How do I…?" |
| `reference/` | Reference | "What exactly is…?" |
| `security/` | For reviewers | "Is it safe, and where does data go?" |

## Running locally

```sh
export NODE_AUTH_TOKEN=$(gh auth token)   # @sprout-foundry/* packages come from GitHub Packages
npm ci
cp .env.example .env                      # SITE_URL, MARKETING_URL
npm run dev
```

`npm run build` writes the site to `dist/`, with `llms.txt` and
`llms-full.txt` for coding agents.

## License

Apache-2.0, like the Sprout agent.
