<template>
	<section
		class="bg-primary py-16 md:py-24"
		:aria-labelledby="headingId"
	>
		<h2
			:id="headingId"
			class="sr-only"
		>
			{{ $t(`${ns}.ringSizeTitle`) }}
		</h2>
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<div class="space-y-16 md:space-y-24">
				<div
					v-for="feature in features"
					:key="feature.key"
					class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
				>
					<div
						class="order-2 rounded-xl overflow-hidden shadow-2xl"
						:class="feature.reversed ? 'lg:order-1' : 'lg:order-2'"
					>
						<NuxtImg
							:src="feature.img"
							:alt="$t(feature.alt)"
							width="700"
							height="400"
							sizes="100vw lg:600px"
							format="webp"
							class="w-full h-64 md:h-80 object-cover"
							loading="lazy"
						/>
					</div>
					<div
						class="order-1 space-y-4"
						:class="feature.reversed ? 'lg:order-2' : 'lg:order-1'"
					>
						<div class="flex items-center gap-3">
							<span
								class="material-symbols-outlined text-white text-2xl"
								aria-hidden="true"
							>{{ feature.icon }}</span>
							<h3 class="text-xl md:text-2xl font-bold text-white">
								{{ $t(`${ns}.${feature.key}Title`) }}
							</h3>
						</div>
						<Separator class="w-20 h-0.5 bg-secondary/80" />
						<p class="text-white/90 text-base leading-relaxed">
							{{ $t(`${ns}.${feature.key}Text`) }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Separator } from '~/components/ui/separator';

const props = defineProps<{
	// Translation namespace: "homeView" (start page) or "adressringzangeView" (product page).
	ns: string;
}>();

const headingId = computed(() => `${props.ns}-details-heading`);

const features = [
	{ key: 'ringSize', icon: 'adjust', img: '/1.jpg', alt: 'alt.ringSizesImage', reversed: false },
	{ key: 'ringDestruction', icon: 'verified', img: '/2.jpg', alt: 'alt.noDamageImage', reversed: true },
	{ key: 'easyHandling', icon: 'pan_tool', img: '/3.jpg', alt: 'alt.easyHandlingImage', reversed: false },
	{ key: 'quality', icon: 'handyman', img: '/4.jpg', alt: 'alt.qualityImage', reversed: true },
];
</script>
