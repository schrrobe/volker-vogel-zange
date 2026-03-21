<template>
	<div :class="[isRtl ? 'text-right' : 'text-left']" :dir="htmlAttrs.dir">
		<Html
			:lang="htmlAttrs.lang"
			:dir="htmlAttrs.dir"
		/>
		<a
			href="#main-content"
			class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
		>
			Skip to main content
		</a>
		<HeaderSection />
		<!-- Cookie Consent Banner with Focus Trap -->
		<Teleport to="body">
			<div
				v-if="showCookieModal"
				ref="cookieDialog"
				class="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
				role="dialog"
				aria-modal="true"
				:aria-label="t('cookieBox.headline')"
				@keydown="handleCookieKeydown"
			>
				<div class="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl sm:p-8 animate-in slide-in-from-bottom-4 duration-300">
					<div class="flex items-center gap-3 mb-4">
						<span class="material-symbols-outlined text-primary text-2xl" aria-hidden="true">cookie</span>
						<h2 class="text-xl font-semibold text-foreground">
							{{ t('cookieBox.headline') }}
						</h2>
					</div>
					<p class="text-sm leading-relaxed text-muted-foreground mb-6">
						{{ t('cookieBox.text') }}
					</p>
					<div class="flex flex-col sm:flex-row gap-3">
						<Button
							ref="cookieAcceptBtn"
							size="lg"
							class="flex-1"
							@click="setCookie('beringungszangeCookieBar', 'true', 30)"
						>
							{{ t('cookieBox.buttonFirst') }}
						</Button>
						<Button
							ref="cookieRejectBtn"
							variant="outline"
							size="lg"
							class="flex-1"
							@click="showCookieModal = false"
						>
							{{ t('cookieBox.buttonSecond') }}
						</Button>
					</div>
				</div>
			</div>
		</Teleport>
		<main id="main-content">
			<NuxtPage />
		</main>
		<FooterSection />
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, ref, watch, nextTick } from 'vue';
import HeaderSection from '~/components/HeaderSection.vue';
import FooterSection from '~/components/FooterSection.vue';
import { Button } from '~/components/ui/button';

const { gtag, initialize } = useGtag();

const route = useRoute();

const showCookieModal = ref(false);
const cookieDialog = ref<HTMLElement | null>(null);
const cookieAcceptBtn = ref<any>(null);
const cookieRejectBtn = ref<any>(null);

const isProd = import.meta.client ? window.location.host === 'beringungszange.de' : false;

const { t, locale } = useI18n();

const isRtl = computed(() => {
	return ['ar', 'ae', 'qa', 'ir', 'om', 'bh'].includes(locale.value);
});

const imageSrc = computed(() => {
	return 'https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp';
});

// Punkt 2: Focus trap for cookie dialog
function handleCookieKeydown(e: KeyboardEvent) {
	if (e.key === 'Escape') {
		showCookieModal.value = false;
		return;
	}
	if (e.key !== 'Tab') return;

	const acceptEl = cookieAcceptBtn.value?.$el || cookieAcceptBtn.value;
	const rejectEl = cookieRejectBtn.value?.$el || cookieRejectBtn.value;
	if (!acceptEl || !rejectEl) return;

	const focusable = [acceptEl, rejectEl];
	const first = focusable[0];
	const last = focusable[focusable.length - 1];

	if (e.shiftKey) {
		if (document.activeElement === first) {
			e.preventDefault();
			last.focus();
		}
	}
	else {
		if (document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}
}

// Auto-focus first button when cookie modal opens
watch(showCookieModal, async (val) => {
	if (val) {
		await nextTick();
		const acceptEl = cookieAcceptBtn.value?.$el || cookieAcceptBtn.value;
		acceptEl?.focus();
	}
});

function setSeoTitle(routePath: string) {
	const titleMap = new Map([
		[`/${locale.value}`, t('seo.title')],
		[`/${locale.value}/adressringzange`, t('seo.adressringzangeTitle')],
		[`/${locale.value}/impressum`, t('seo.impressumTitle')],
		[`/${locale.value}/dsgvo`, t('seo.dsgvoTitle')],
	]);
	return titleMap.get(routePath);
}

function setSeoDescription(routePath: string) {
	const titleMap = new Map([
		[`/${locale.value}`, t('seo.description')],
		[`/${locale.value}/adressringzange`, t('seo.adressringzangeDescription')],
		[`/${locale.value}/impressum`, t('seo.impressumDescription')],
		[`/${locale.value}/dsgvo`, t('seo.dsgvoDescription')],
	]);
	return titleMap.get(routePath);
}

function setCookie(name: string, value: string, days: number) {
	const date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	const expires = 'expires=' + date.toUTCString();
	document.cookie = name + '=' + value + ';' + expires + ';path=/';
	if (isProd) {
		initialize();
	}
	showCookieModal.value = false;
}

function getCookie(name: string) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()!.split(';').shift();
	return null;
}

onMounted(() => {
	const consent = getCookie('beringungszangeCookieBar');
	if (consent === 'true') {
		showCookieModal.value = false;
		if (isProd) {
			initialize();
		}
	}
	else {
		showCookieModal.value = true;
	}
});

const head = useLocaleHead({
	addDirAttribute: true,
	addSeoAttributes: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);

// Punkt 10: Canonical URL per Sprache
const canonicalUrl = computed(() => `https://beringungszange.de${route.path}`);

useSeoMeta({
	title: setSeoTitle(route.path),
	description: setSeoDescription(route.path),
	ogTitle: setSeoTitle(route.path),
	ogDescription: setSeoDescription(route.path),
	ogImage: imageSrc,
	ogType: 'website',
	ogLocale: locale.value,
	ogLocaleAlternate: locale,
	ogUrl: canonicalUrl,
	ogSiteName: 'beringungszange.de',
	twitterCard: 'summary_large_image',
	twitterImage: 'https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp',
	robots: route.name?.toString().includes('index') || route.name?.toString().includes('adressringzange') ? 'index, follow' : 'noindex, nofollow',
});

// Punkt 10: Explicit canonical link
useHead({
	link: [
		{ rel: 'canonical', href: canonicalUrl.value },
	],
});

// Punkt 5: Multilingual Structured Data + Punkt 8: FAQ Schema
useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Product',
				'name': t('seo.title'),
				'description': t('seo.description'),
				'brand': {
					'@type': 'Brand',
					'name': 'Volker Jüngling',
				},
				'offers': {
					'@type': 'Offer',
					'price': '140',
					'priceCurrency': 'EUR',
					'availability': 'https://schema.org/InStock',
					'seller': {
						'@type': 'Person',
						'name': 'Volker Jüngling',
						'address': {
							'@type': 'PostalAddress',
							'streetAddress': 'Vormbrockweg 1c',
							'addressLocality': 'Dortmund',
							'postalCode': '44149',
							'addressCountry': 'DE',
						},
					},
				},
				'image': 'https://beringungszange.de/Beringungszange.png',
				'url': canonicalUrl.value,
				'countryOfOrigin': {
					'@type': 'Country',
					'name': 'Germany',
				},
				'manufacturer': {
					'@type': 'Person',
					'name': 'Volker Jüngling',
				},
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				'name': 'Volker Jüngling - Beringungszangen',
				'url': 'https://beringungszange.de',
				'telephone': '+4915128803091',
				'email': 'v.juengling@t-online.de',
				'address': {
					'@type': 'PostalAddress',
					'streetAddress': 'Vormbrockweg 1c',
					'addressLocality': 'Dortmund',
					'postalCode': '44149',
					'addressCountry': 'DE',
				},
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				'mainEntity': [
					{
						'@type': 'Question',
						'name': t('faq.q1'),
						'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a1') },
					},
					{
						'@type': 'Question',
						'name': t('faq.q2'),
						'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a2') },
					},
					{
						'@type': 'Question',
						'name': t('faq.q3'),
						'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a3') },
					},
					{
						'@type': 'Question',
						'name': t('faq.q4'),
						'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a4') },
					},
					{
						'@type': 'Question',
						'name': t('faq.q5'),
						'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a5') },
					},
				],
			}),
		},
	],
});
</script>
