<template>
	<footer class="bg-gray-900 text-gray-300" role="contentinfo">
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12 md:py-16">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
				<!-- Legal & Links -->
				<div>
					<div v-if="isEurope" class="mb-8">
						<h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">
							{{ t('lawMenu.lawHead') }}
						</h3>
						<ul class="space-y-2" role="list">
							<li>
								<NuxtLink
									:to="`/${locale}/impressum`"
									class="text-gray-400 hover:text-white transition-colors text-sm"
								>
									{{ t('lawMenu.imprint') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink
									:to="`/${locale}/dsgvo`"
									class="text-gray-400 hover:text-white transition-colors text-sm"
								>
									{{ t('lawMenu.consent') }}
								</NuxtLink>
							</li>
						</ul>
					</div>
					<div>
						<h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">
							{{ t('footer.moreLinks') }}
						</h3>
						<ul class="space-y-2" role="list">
							<li>
								<NuxtLink
									:to="`/${locale}/adressringzange`"
									class="text-gray-400 hover:text-white transition-colors text-sm"
								>
									{{ t('footer.adressringzange') }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>

				<!-- Contact -->
				<div>
					<h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">
						{{ t('impressum.contact') }}
					</h3>
					<ul class="space-y-3" role="list">
						<li class="flex items-center gap-2">
							<span class="material-symbols-outlined text-gray-400 text-lg" aria-hidden="true">phone</span>
							<a
								href="tel:+4915128803091"
								class="text-gray-400 hover:text-white transition-colors text-sm"
							>
								+49 (0) 151 - 28803091
							</a>
						</li>
						<li class="flex items-center gap-2">
							<span class="material-symbols-outlined text-gray-400 text-lg" aria-hidden="true">mail</span>
							<a
								href="mailto:v.juengling@t-online.de"
								class="text-gray-400 hover:text-white transition-colors text-sm"
							>
								v.juengling@t-online.de
							</a>
						</li>
					</ul>
				</div>

				<!-- WhatsApp QR -->
				<div>
					<h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">
						{{ t('homeView.btnWhatsapp') }}
					</h3>
					<a
						href="https://wa.me/4915128803091"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-xl bg-white p-2 hover:shadow-lg transition-shadow"
						aria-label="WhatsApp QR Code"
					>
						<canvas
							ref="qrcode"
							class="block"
						/>
					</a>
				</div>
			</div>

			<!-- Language Switcher -->
			<Separator class="my-8 bg-gray-800" />
			<nav aria-label="Language selection" class="flex flex-wrap justify-center gap-x-1 gap-y-1">
				<template v-for="(lang, index) in langs" :key="lang.locale">
					<NuxtLink
						:to="switchLocalePath(lang.locale)"
						class="text-xs text-gray-500 hover:text-white transition-colors px-1"
						:aria-label="'Switch to ' + lang.text"
					>
						{{ lang.text }}
					</NuxtLink>
					<span
						v-if="index < langs.length - 1"
						class="text-gray-700 text-xs"
						aria-hidden="true"
					>|</span>
				</template>
			</nav>

			<p class="text-center text-gray-600 text-xs mt-6">
				&copy; {{ new Date().getFullYear() }}
				<a
					href="https://prestige-webdesign.de/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 hover:text-white transition-colors"
				>Prestige Webdesign</a>. All rights reserved.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import QRCode from 'qrcode';
import { Separator } from '~/components/ui/separator';

const { locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const qrcode = ref<HTMLCanvasElement | null>(null);
const link = 'https://api.whatsapp.com/send/?phone=4915128803091&text&type=phone_number&app_absent=0';

const isEurope = computed(() => {
	return ['en', 'gb', 'es', 'fr', 'pl', 'sk', 'nl', 'de', 'pt', 'cs'].includes(locale.value);
});

const langs = [
	{ locale: 'en', text: 'English (US)' },
	{ locale: 'gb', text: 'English (UK)' },
	{ locale: 'de', text: 'Deutsch' },
	{ locale: 'es', text: 'Español' },
	{ locale: 'fr', text: 'Français' },
	{ locale: 'ru', text: 'Русский' },
	{ locale: 'pl', text: 'Polski' },
	{ locale: 'sk', text: 'Slovenský' },
	{ locale: 'ja', text: '日本語' },
	{ locale: 'ar', text: 'العربية' },
	{ locale: 'nl', text: 'Nederlands' },
	{ locale: 'ae', text: 'العربية (UAE)' },
	{ locale: 'qa', text: 'العربية (Qatar)' },
	{ locale: 'ir', text: 'فارسی (Iran)' },
	{ locale: 'om', text: 'العربية (Oman)' },
	{ locale: 'bh', text: 'العربية (Bahrain)' },
	{ locale: 'pt', text: 'Português' },
	{ locale: 'cs', text: 'Čeština' },
];

const generateQRCode = async () => {
	try {
		if (qrcode.value) {
			await QRCode.toCanvas(qrcode.value, link, {
				width: 150,
				margin: 1,
			});
		}
	}
	catch {
		console.error('QR code generation failed');
	}
};

onMounted(() => {
	generateQRCode();
});
</script>
