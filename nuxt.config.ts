// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: 'static',
	ssr: true,
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				{ rel: 'manifest', href: '/site.webmanifest' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' },
			],
		},
	},
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxt/image',
		'@nuxt/eslint',
		'nuxt-gtag',
		'@nuxtjs/sitemap',
	],
	css: [
		'~/assets/css/tailwind.css',
	],
	tailwindcss: {
		configPath: 'tailwind.config.ts',
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
	gtag: {
		id: 'G-PFTVDF0479',
		enabled: false,
	},
	site: {
		url: 'https://beringungszange.de',
		trailingSlash: true,
	},
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English (US)', file: 'en-US.js' },
			{ code: 'gb', iso: 'en-GB', name: 'English (UK)', file: 'en-GB.js' },
			{ code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de-DE.js' },
			{ code: 'es', iso: 'es-ES', name: 'Español', file: 'es-ES.js' },
			{ code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr-FR.js' },
			{ code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru-RU.js' },
			{ code: 'pl', iso: 'pl-PL', name: 'Polski', file: 'pl-PL.js' },
			{ code: 'sk', iso: 'sk-SK', name: 'Slovenský', file: 'sk-SK.js' },
			{ code: 'ja', iso: 'ja-JP', name: '日本語', file: 'ja-JP.js' },
			{ code: 'ar', iso: 'ar-SA', name: 'العربية', file: 'ar-SA.js' },
			{ code: 'nl', iso: 'nl-NL', name: 'Nederlands', file: 'nl-NL.js' },
			{ code: 'ae', iso: 'ar-AE', name: 'العربية (UAE)', file: 'ar-AE.js' },
			{ code: 'qa', iso: 'ar-QA', name: 'العربية (Qatar)', file: 'ar-QA.js' },
			{ code: 'ir', iso: 'fa-IR', name: 'فارسی (Iran)', file: 'fa-IR.js' },
			{ code: 'om', iso: 'ar-OM', name: 'العربية (Oman)', file: 'ar-OM.js' },
			{ code: 'bh', iso: 'ar-BH', name: 'العربية (Bahrain)', file: 'ar-BH.js' },
			{ code: 'cs', iso: 'cs-CZ', name: 'Čeština', file: 'cs-CZ.js' },
			{ code: 'pt', iso: 'pt-PT', name: 'Português', file: 'pt-PT.js' },
		],
		baseUrl: 'https://beringungszange.de',
		seo: true,
		lazy: true,
		langDir: 'translations/',
		defaultLocale: 'en',
		detectBrowserLanguage: {
			useCookie: false,
			cookieKey: 'i18n_redirected',
			alwaysRedirect: true,
			fallbackLocale: 'en',
			redirectOn: 'root',
		},
		experimental: {
			localeDetector: './translations/localeDetector.ts',
		},
	},
	image: {
		domains: ['abriumbi.sirv.com'],
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	nitro: {
		prerender: {
			failOnError: false,
		},
	},
	compatibilityDate: '2024-07-11',
});
