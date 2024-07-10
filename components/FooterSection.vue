<template>
	<div class="footer-section bg-primary">
		<ContentLayout>
			<ContentSection>
				<div class="row">
					<div
						v-if="isEurope"
						class="col-xs-12 col-md-6 q-pa-md"
					>
						<p class="text-white law-menu-header">
							<strong>{{ t('lawMenu.lawHead') }}</strong>
						</p>
						<ul class="law-menu">
							<li class="law-menu">
								<router-link
									class="text-white"
									:to="`/${locale}/impressum`"
								>
									{{ t('lawMenu.imprint') }}
								</router-link>
							</li>
							<li class="law-menu">
								<router-link
									class="text-white"
									:to="`/${locale}/dsgvo`"
								>
									{{ t('lawMenu.consent') }}
								</router-link>
							</li>
						</ul>
					</div>
					<div class="col-xs-12 col-md-6 q-pa-md">
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
								/><span class="text-white">v.juengling@-t-online.de</span>
							</li>
						</ul>
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
						<span class="seperator">|</span>
					</li>
				</ul>
			</div>
		</ContentLayout>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ContentLayout from '../components/ContentLayout.vue';
import ContentSection from '../components/ContentSection.vue';

const { locale, t } = useI18n();

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
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.footer-section{
  min-height: $header-height*1;
}
.inline-list {
  list-style-type: none;
  padding: 0;
}

.inline-list li {
  display: inline-block;
  //margin-right: 10px;
}
a {
  color: lightgrey;
  text-decoration: none;
}

.seperator {
  margin: 0 5px;
  color: lightgrey;
}

/* Hide the separator for the last item in the loop */
ul.inline-list li:last-child .seperator {
  display: none;
}

.law-menu{
  margin: 0;
  padding: 0;
  list-style: none;
}
.law-menu-header {
  margin: 0;
}
</style>
