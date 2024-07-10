// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', 'nuxt-quasar-ui', '@nuxt/image', '@nuxt/eslint',],
	css: [
		'../assets/scss/styles.scss',
	],
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
			{ code: 'ae', iso: 'ar-AE', name: 'العربية (UAE)', file: 'ar-AE.js' }, // Vereinigte Arabische Emirate
			{ code: 'qa', iso: 'ar-QA', name: 'العربية (Qatar)', file: 'ar-QA.js' }, // Katar
			{ code: 'ir', iso: 'fa-IR', name: 'فارسی (Iran)', file: 'fa-IR.js' }, // Iran
			{ code: 'om', iso: 'ar-OM', name: 'العربية (Oman)', file: 'ar-OM.js' }, // Oman
			{ code: 'bh', iso: 'ar-BH', name: 'العربية (Bahrain)', file: 'ar-BH.js' }, // Bahrain
		],
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
		dir: 'assets/img',
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
