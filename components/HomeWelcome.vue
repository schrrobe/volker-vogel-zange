<template>
	<section class="py-12 md:py-20 bg-muted/50" aria-labelledby="features-heading">
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<h2
				id="features-heading"
				class="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4"
			>
				<slot />
			</h2>
			<Separator class="mx-auto w-16 h-1 bg-primary rounded-full mb-12" />

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
				<Card
					v-for="iconBox in iconBoxes"
					:key="iconBox.icon"
					class="text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow"
				>
					<CardHeader class="pb-2">
						<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-3">
							<span class="material-symbols-outlined text-primary text-3xl" aria-hidden="true">{{ iconBox.icon }}</span>
						</div>
					</CardHeader>
					<CardContent>
						<h3 class="text-base font-semibold text-foreground leading-snug">
							{{ iconBox.text }}
						</h3>
					</CardContent>
				</Card>
			</div>

			<!-- Punkt 7: Manufacturing Video with transcript -->
			<div class="mt-12 lg:hidden">
				<figure>
					<video
						class="w-full rounded-xl shadow-lg"
						width="640"
						height="360"
						muted
						loop
						controls
						preload="metadata"
						:aria-label="$t('alt.videoManufacturing')"
					>
						<source src="/fertigung.mov" type="video/mp4">
						<track
							kind="descriptions"
							:label="$t('alt.videoManufacturing')"
							default
						>
					</video>
					<figcaption class="mt-3 text-sm text-muted-foreground text-center">
						{{ $t('alt.videoManufacturing') }}
					</figcaption>
				</figure>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardContent } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

defineProps<{
	iconBoxes: Array<{ icon: string; text: string }>
}>();
</script>
