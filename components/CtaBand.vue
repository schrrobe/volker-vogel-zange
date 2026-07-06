<template>
	<section
		class="bg-primary py-14 md:py-20"
		aria-labelledby="cta-band-heading"
	>
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8 text-center">
			<h2
				id="cta-band-heading"
				class="text-2xl sm:text-3xl font-bold text-white"
			>
				{{ t('homeView.ctaHeadline') }}
			</h2>

			<div class="mt-4 flex items-baseline justify-center gap-2">
				<span class="text-3xl font-extrabold text-white">{{ priceDisplay }}</span>
				<span class="text-sm text-white/70">{{ t('homeView.shipping') }}</span>
			</div>

			<div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
				<ContactButtons
					mail-variant="secondary"
					whatsapp-variant="default"
					whatsapp-class="bg-white text-gray-900 hover:bg-white/90"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { priceDisplay } = usePricing();
</script>
