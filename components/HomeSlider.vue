<template>
	<section
		class="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] bg-cover bg-center bg-no-repeat bg-[url('/bg-mobile.webp')] md:bg-[url('/falken-federn.webp')]"
		aria-labelledby="hero-heading"
	>
		<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
		<div class="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
			<div class="rounded-2xl bg-white/75 p-6 sm:p-10 shadow-2xl backdrop-blur-md border border-white/40">
				<h1
					id="hero-heading"
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
				>
					<slot />
				</h1>

				<div class="mt-6 flex items-baseline justify-center gap-2">
					<span class="text-3xl sm:text-4xl font-extrabold text-gray-900">{{ priceDisplay }}</span>
					<span class="text-sm text-gray-700">{{ t('homeView.shipping') }}</span>
				</div>

				<div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
					<ContactButtons />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { priceDisplay } = usePricing();

// Preload the hero background per breakpoint so it can act as the LCP element
// without waiting for JS (previously swapped in onMounted).
useHead({
	link: [
		{ rel: 'preload', as: 'image', href: '/bg-mobile.webp', media: '(max-width: 767px)' },
		{ rel: 'preload', as: 'image', href: '/falken-federn.webp', media: '(min-width: 768px)' },
	],
});
</script>
