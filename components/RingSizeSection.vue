<template>
	<section class="bg-primary py-16 md:py-24" aria-labelledby="details-heading">
		<h2 id="details-heading" class="sr-only">{{ $t('homeView.ringSizeTitle') }}</h2>
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<div class="space-y-16 md:space-y-24">
				<!-- Feature 1: Ring Size -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<span class="material-symbols-outlined text-white text-2xl" aria-hidden="true">adjust</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t('homeView.ringSizeTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-[#B08D57]/80" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('homeView.ringSizeText') }}
						</p>
					</div>
					<div class="rounded-xl overflow-hidden shadow-2xl">
						<client-only>
							<lazy-nuxt-img
								src="/1.jpg"
								:alt="$t('alt.ringSizesImage')"
								width="700"
								height="400"
								class="w-full h-64 md:h-80 object-cover"
								loading="lazy"
							/>
						</client-only>
					</div>
				</div>

				<!-- Feature 2: No Damage (reversed layout) -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div class="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl">
						<client-only>
							<lazy-nuxt-img
								src="/2.jpg"
								:alt="$t('alt.noDamageImage')"
								width="700"
								height="400"
								class="w-full h-64 md:h-80 object-cover"
								loading="lazy"
							/>
						</client-only>
					</div>
					<div class="order-1 lg:order-2 space-y-4">
						<div class="flex items-center gap-3">
							<span class="material-symbols-outlined text-white text-2xl" aria-hidden="true">verified</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t('homeView.ringDestructionTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-[#B08D57]/80" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('homeView.ringDestructionText') }}
						</p>
					</div>
				</div>

				<!-- Feature 3: Easy Handling -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<span class="material-symbols-outlined text-white text-2xl" aria-hidden="true">pan_tool</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t('homeView.easyHandlingTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-[#B08D57]/80" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('homeView.easyHandlingText') }}
						</p>
					</div>
					<div class="rounded-xl overflow-hidden shadow-2xl">
						<client-only>
							<lazy-nuxt-img
								src="/3.jpg"
								:alt="$t('alt.easyHandlingImage')"
								width="700"
								height="400"
								class="w-full h-64 md:h-80 object-cover"
								loading="lazy"
							/>
						</client-only>
					</div>
				</div>

				<!-- Feature 4: Quality (reversed layout) -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div class="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl">
						<client-only>
							<lazy-nuxt-img
								src="/4.jpg"
								:alt="$t('alt.qualityImage')"
								width="700"
								height="400"
								class="w-full h-64 md:h-80 object-cover"
								loading="lazy"
							/>
						</client-only>
					</div>
					<div class="order-1 lg:order-2 space-y-4">
						<div class="flex items-center gap-3">
							<span class="material-symbols-outlined text-white text-2xl" aria-hidden="true">handyman</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t('homeView.qualityTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-[#B08D57]/80" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('homeView.qualityText') }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Separator } from '~/components/ui/separator';
</script>
