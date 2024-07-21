<template>
	<!-- <div>
    <NuxtWelcome />
  </div> -->
	<div :class="textAlignmentClass">
		<HeaderSection />
        <page-overlay v-if="showCookieModal">
          <VzModal medium :closable="false">
            <h4 style="padding: 0; margin: 20px 0 40px 0">{{ t('cookieBox.headline') }}</h4>
            <p>{{t('cookieBox.text')}}</p>
            <div class="row justify-center">
              <div class="col-12 co-md-6 justify-center">
                <q-btn
                    style="width: 100%"
                    class="q-y-lg q-px-md q-my-xs"
                    size="100%"
                    color="positive"
                    :label="t('cookieBox.buttonFirst')"
                    @click="setCookie('cookieBar', 'true', 30 )"
                />
              </div>
              <div class="col-12 co-md-6 justify-center">
                <q-btn
                    style="width: 100%"
                    class="q-y-lg q-px-md q-my-xs"
                    size="100%"
                    color="negative"
                    :label="t('cookieBox.buttonSecond')"
                    @click="showCookieModal = false"
                />
              </div>
            </div>
          </VzModal>
        </page-overlay>
		<NuxtPage />
		<FooterSection />
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import HeaderSection from '../components/HeaderSection.vue';
import FooterSection from '~/components/FooterSection.vue';
import PageOverlay from  '~/components/PageOverlay/PageOverlay.vue'
import VzModal from "~/components/modal/VzModal.vue";

const route = useRoute();

const showCookieModal = ref(false)

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

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  showCookieModal.value = false;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

onMounted(() => {

  const consent = getCookie('cookieBar')

  if(consent ==='true'){
    showCookieModal.value = false;
  }else{
    showCookieModal.value = true;
  }
})

useSeoMeta({
	title: seoTitle,
	ogTitle: seoDescription,
	description: seoDescription,
	ogDescription: seoDescription,
	ogImage: imageSrc,
	twitterCard: 'https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp',
	robots: route.name.includes('index') ? 'index' : 'noindex',
});
</script>
