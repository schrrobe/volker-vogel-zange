<template>
	<!-- <div>
    <NuxtWelcome />
  </div> -->
	<div :class="textAlignmentClass">
		<HeaderSection />
		<NuxtPage />
		<FooterSection />
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import HeaderSection from '../components/HeaderSection.vue';
import FooterSection from '~/components/FooterSection.vue';

const route = useRoute();

console.log(route.name);

const windowWidth = ref(0);
const { t } = useI18n();
const imageSrc = computed(() => {
	return windowWidth.value < 1024
		? 'https://abriumbi.sirv.com/volker-vogelringzange/bg-mobile.webp'
		: 'https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp';
});
const { locale } = useI18n();

const textAlignmentClass = computed(() => {
	return ['ar', 'ae', 'qa', 'ir', 'om', 'bh'].includes(locale.value) ? 'text-right' : 'text-left';
});
const seoTitle = computed(() => {
	return t('seo.title');
});

const seoDescription = computed(() => {
	return t('seo.description');
});

useSeoMeta({
	title: seoTitle,
	ogTitle: seoDescription,
	description: seoTitle,
	ogDescription: seoDescription,
	ogImage: imageSrc,
	twitterCard: 'https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp',
	robots: route.name.includes('index') ? 'index' : 'noindex',
});
</script>
