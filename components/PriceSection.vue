<template>
	<div class="row items-center show-desktop">
		<div class="col-7">
			<h1 class="headline">{{ t('homeView.headerTong') }}</h1>
			<div class="text-right q-pr-xl q-mb-xl">
				<span class="price">
					<span v-if="isDollar">$</span> 140 <span v-if="!isDollar">€</span>
				</span>
				<span class="q-ml-md shipping-text">{{ t('homeView.shipping') }}</span>
			</div>
			<div class="row jus q-mt-lg q-pl-md">
				<div class="col-6">
					<q-btn
						class="q-mr-md"
						color="primary"
						:label="t('homeView.btnMail')"
						href="mailto:v.juengling@-t-online.de"
					/>
				</div>
				<div class="col-6">
					<q-btn
						color="black"
						href="https://wa.me/4915128803091"
						:label="t('homeView.btnWhatsapp')"
					/>
				</div>
			</div>
		</div>
		<div
			class="col-5"
			style="margin: auto"
		>
      <client-only>
        <lazy-nuxt-img
            src="/Beringungszange.png"
            width="433px"
        />
      </client-only>
		</div>
	</div>

	<section class="section-a show-mobile">
		<div>
			<div>
        <h1 class="headline">{{ t('homeView.headerTong') }}</h1>
				<div class="row justify-center">
          <client-only>
            <lazy-nuxt-img src="/Beringungszange.png" />
          </client-only>
				</div>
				<div class="row justify-center">
					<span class="price">
						<span v-if="isDollar">$</span> 140 <span v-if="!isDollar">€</span>
					</span>
          <span class="q-ml-md">{{ t('homeView.shipping') }}</span>
				</div>
				<div class="row justify-around q-mt-lg">
					<div class="col-5">
						<q-btn
							class="q-mr-md"
							color="primary"
              :label="t('homeView.btnMail')"
							href="mailto:v.juengling@-t-online.de"
						/>
					</div>
					<div class="col-5">
						<q-btn
							color="black"
							href="https://wa.me/4915128803091"
							:label="t('homeView.btnWhatsapp')"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();
const isDollar = computed(() => ['ar', 'ae', 'qa', 'ir', 'om', 'bh', 'ar', 'ja', 'ru', 'en'].includes(locale.value));
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';

.section-a .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;
}

.section-a h1 {
  font-size: 4rem;
  color: black;
}

.section-a p {
  margin: 1rem 0;
}

.price-old,
.price {
  font-size: 40px;
  display: inline-block;
  font-weight: bold;
  position: relative;
}

.price {
  color: red;
}

.price-old {
  $lineThroughWidth: 3px;
  font-size: 25px;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: $lineThroughWidth;
    background-color: red;
    width: 110%;
    left: -5%;
    transform: rotate(-13deg) translateY(calc(50% - #{$lineThroughWidth}));
  }
}
  h1 {
    font-size: $headline-h2!important;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 2;
    text-align: center;
    @include bp(l) {
      font-size: $headline-h2;
      line-height: 2.5;
    }
  }
  .shipping-text{
    align-self: center;
    @include bp(l){
      align-self: unset;
    }
  }
</style>
