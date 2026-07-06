<template>
	<section
		class="py-12 md:py-20"
		aria-labelledby="price-heading"
	>
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				<!-- Text Content -->
				<div class="order-2 lg:order-1 text-center lg:text-left">
					<h2
						id="price-heading"
						class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-6"
					>
						<slot />
					</h2>

					<div class="flex items-baseline justify-center lg:justify-start gap-3 mb-8">
						<span class="text-5xl font-extrabold text-foreground">{{ priceDisplay }}</span>
						<span class="text-muted-foreground text-sm">{{ t('homeView.shipping') }}</span>
					</div>

					<div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
						<ContactButtons />
					</div>
				</div>

				<!-- Product Image -->
				<div class="order-1 lg:order-2 flex justify-center">
					<NuxtImg
						src="/Beringungszange.png"
						:alt="t('alt.productImage')"
						width="433"
						height="433"
						sizes="320px lg:448px"
						format="webp"
						class="w-full max-w-sm lg:max-w-md drop-shadow-2xl"
						loading="eager"
						fetchpriority="high"
						preload
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { priceDisplay } = usePricing();
</script>
