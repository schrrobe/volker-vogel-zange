<template>
	<div>
		<ContentLayout>
			<ContentSection>
				<h1 class="h1-impressum">
					{{ t('impressum.header') }}
				</h1>
				<h2 class="impressum">
					{{ t('impressum.subHeader') }}
				</h2>
				<p>
					Volker Jüngling<br>
					Vormbrockweg 1c<br>
					44149 Dortmund<br>
					{{ t('impressum.tel') }} +49 (0) 231 2217134<br>
					{{ t('impressum.mobil') }} +49 (0) 151 - 28803091<br>
					{{ t('impressum.mail') }} v.juengling@-t-online.de
				</p>

				<h2 class="impressum">
					{{ t('impressum.contact') }}
				</h2>
				{{ t('impressum.contact') }} Volker Jüngling <br>
				{{ t('impressum.mobil') }} +49 (0) 151 288 030 91<br>
				{{ t('impressum.mail') }} v.juengling@-t-online.de
				<h2 class="impressum">
					{{ t('impressum.consumerPoint') }}
				</h2>
				<p>{{ t('impressum.consumerPointText') }}</p>
				<p>{{ t('impressum.src') }} <a href="https://www.e-recht24.de">e-recht24.de</a></p>
			</ContentSection>
		</ContentLayout>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ContentLayout from '../components/ContentLayout.vue';
import ContentSection from '../components/ContentSection.vue';

const { t } = useI18n();

useSeoMeta({
	robots: 'noindex',
});
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
</style>
