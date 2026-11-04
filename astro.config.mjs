// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import { loadEnv } from 'vite';

// Deployment-specific values come from the build environment (or .env), never
// from the repo, so the serving domains can change without a code change:
// SITE_URL is this docs site's public origin; MARKETING_URL the product site.
const env = loadEnv('', '.', '');
const siteUrl = env.SITE_URL || 'http://localhost:4321';
const marketingUrl = (env.MARKETING_URL || 'http://localhost:4322').replace(/\/+$/, '');

export default defineConfig({
	site: siteUrl,
	// Pages that live on the product site; docs link /pricing/ and the
	// redirect carries the reader there, so no domain is written in a page.
	redirects: {
		'/pricing': `${marketingUrl}/pricing/`,
	},
	integrations: [
		starlight({
			title: 'Sprout Foundry docs',
			description: 'How to build with Sprout: getting started, concepts, guides and reference.',
			logo: { src: './public/logo-mark.svg', alt: 'Sprout Foundry' },
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sprout-foundry/docs' }],
			editLink: { baseUrl: 'https://github.com/sprout-foundry/docs/edit/main/' },
			lastUpdated: true,
			customCss: ['./src/styles/brand.css'],
			// llms.txt / llms-full.txt: the docs in plain text for coding agents.
			plugins: [starlightLlmsTxt({ projectName: 'Sprout Foundry' })],
			// Diátaxis: learn (start here), understand (concepts), do (guides),
			// look up (reference) — plus security for reviewers.
			sidebar: [
				{ label: 'Start here', items: [{ autogenerate: { directory: 'start' } }] },
				{ label: 'Concepts', items: [{ autogenerate: { directory: 'concepts' } }] },
				{ label: 'Guides', items: [{ autogenerate: { directory: 'guides' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
				{ label: 'Security and data', items: [{ autogenerate: { directory: 'security' } }] },
			],
		}),
	],
});
