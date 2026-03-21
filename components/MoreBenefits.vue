<template>
	<section class="py-12 md:py-20" aria-labelledby="benefits-heading">
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<h2
				id="benefits-heading"
				class="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4"
			>
				<slot name="title" />
			</h2>
			<Separator class="mx-auto w-16 h-1 bg-primary rounded-full mb-6" />
			<p class="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
				<slot name="intro" />
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card
					v-for="iconBox in iconBoxes"
					:key="iconBox.icon"
					class="border bg-white shadow-sm hover:shadow-md transition-shadow"
				>
					<CardHeader class="flex flex-row items-start gap-4 space-y-0">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
							<span class="material-symbols-outlined text-primary text-2xl" aria-hidden="true">{{ iconBox.icon }}</span>
						</div>
						<div>
							<CardTitle class="text-lg mb-2">
								{{ iconBox.title }}
							</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p class="text-muted-foreground leading-relaxed">
							{{ iconBox.text }}
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

defineProps<{
	iconBoxes: Array<{ icon: string; title: string; text: string }>
}>();
</script>
