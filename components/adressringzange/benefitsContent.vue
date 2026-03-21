<template>
	<section class="bg-primary py-16 md:py-24" aria-labelledby="arz-details-heading">
		<h2 id="arz-details-heading" class="sr-only">{{ $t('adressringzangeView.ringSizeTitle') }}</h2>
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<div class="space-y-16 md:space-y-24">
				<!-- Feature 1 -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<span class="material-symbols-outlined text-white text-2xl" aria-hidden="true">plumbing</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t('adressringzangeView.ringSizeTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-white/40" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('adressringzangeView.ringSizeText') }}
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

				<!-- Feature 2 -->
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
								{{ $t('adressringzangeView.ringDestructionTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-white/40" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('adressringzangeView.ringDestructionText') }}
						</p>
					</div>
				</div>

				<!-- Feature 3 -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<span class="material-symbols-outlined text-white text-2xl" aria-hidden="true">thumb_up</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t('adressringzangeView.easyHandlingTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-white/40" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('adressringzangeView.easyHandlingText') }}
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

				<!-- Feature 4 -->
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
								{{ $t('adressringzangeView.qualityTitle') }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-white/40" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t('adressringzangeView.qualityText') }}
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
