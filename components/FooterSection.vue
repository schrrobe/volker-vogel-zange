<template>
	<div class="footer-section bg-primary">
		<ContentLayout>
			<ContentSection>
				<div class="row justify-around">
					<div
						v-if="isEurope"
						class="col-xs-12 col-md-3 q-pa-md"
					>
						<p class="text-white law-menu-header">
							<strong>{{ t('lawMenu.lawHead') }}</strong>
						</p>
						<ul class="law-menu">
							<li class="law-menu">
								<NuxtLink
									class="text-white"
									:to="`/${locale}/impressum`"
								>
									{{ t('lawMenu.imprint') }}
								</NuxtLink>
							</li>
							<li class="law-menu">
								<NuxtLink
									class="text-white"
									:to="`/${locale}/dsgvo`"
								>
									{{ t('lawMenu.consent') }}
								</NuxtLink>
							</li>
						</ul>
					</div>
					<div class="col-xs-12 col-md-3 q-pa-md">
						<p class="text-white law-menu-header">
							<strong>{{ t('impressum.contact') }}</strong>
						</p>
						<ul class="law-menu">
							<li class="law-menu">
								<q-icon
									name="phone"
									color="white"
									class="q-mr-xs"
								/><span class="text-white">+49 (0) 151 - 28803091</span>
							</li>
							<li class="law-menu">
								<q-icon
									name="mail"
									color="white"
									class="q-mr-xs"
								/><span class="text-white">v.juengling@t-online.de</span>
							</li>
						</ul>
					</div>
					<div class="col-xs-12 col-md-3 q-pa-md justify-center">
            <p class="text-white"><strong>{{t('homeView.btnWhatsapp')}}</strong></p>
						<div class="qr-container rounded-borders">
              <a href="https://wa.me/4915128803091">
							<canvas
								ref="qrcode"
								class="qrcode"
							/>
              </a>
						</div>
					</div>
				</div>
			</ContentSection>
			<div class="row text-center">
				<ul class="inline-list">
					<li
						v-for="lang in langs"
						:key="lang.locale"
					>
						<NuxtLink :to="switchLocalePath(lang.locale)">
							{{ lang.text }}
						</NuxtLink>
						<span class="separator">|</span>
					</li>
				</ul>
			</div>
		</ContentLayout>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import QRCode from 'qrcode';
import ContentLayout from '../components/ContentLayout.vue';
import ContentSection from '../components/ContentSection.vue';
import { NuxtLink } from '#components';

const { locale, t } = useI18n();
const qrcode = ref(null);
const link = 'https://api.whatsapp.com/send/?phone=4915128803091&text&type=phone_number&app_absent=0';

const isEurope = computed(() => {
	return ['en', 'gb', 'es', 'fr', 'pl', 'sk', 'nl', 'de'].includes(locale.value);
});

const langs = ref([
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
]);

const generateQRCode = async () => {
	try {
		await QRCode.toCanvas(qrcode.value, link, {
			width: '178px',
			height: '178px',
		});
	}
	catch {
		console.error('Fehler qrcode konnte nicht generiert werden');
	}
};

onMounted(() => {
	generateQRCode();
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.footer-section {
  min-height: $header-height * 1;
}
.inline-list {
  list-style-type: none;
  padding: 0;
}
.inline-list li {
  display: inline-block;
}
a {
  color: lightgrey;
  text-decoration: none;
}
.separator {
  margin: 0 5px;
  color: lightgrey;
}
/* Hide the separator for the last item in the loop */
ul.inline-list li:last-child .separator {
  display: none;
}
.law-menu {
  margin: 0;
  padding: 0;
  list-style: none;
}
.law-menu-header {
  margin: 0;
}
</style>
