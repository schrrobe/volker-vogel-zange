<template>
	<section
		class="py-12 md:py-20 bg-muted/30"
		:aria-label="$t('alt.gallery')"
	>
		<div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<figure
					v-for="img in images"
					:key="img.src"
					class="group relative overflow-hidden rounded-xl shadow-md"
				>
					<NuxtImg
						:src="img.src"
						:alt="$t(img.altKey)"
						width="700"
						height="400"
						sizes="100vw sm:50vw lg:350px"
						format="webp"
						class="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</figure>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const images = [
	{ src: '/1.jpg', altKey: 'alt.galleryPliers' },
	{ src: '/g9.jpeg', altKey: 'alt.galleryDogFalcon' },
	{ src: '/3.jpg', altKey: 'alt.galleryRinging' },
	{ src: '/4.jpg', altKey: 'alt.galleryDuck' },
	{ src: '/2.jpg', altKey: 'alt.galleryRaptor' },
	{ src: '/g6.jpg', altKey: 'alt.galleryEquipment' },
	{ src: '/g7.jpg', altKey: 'alt.galleryDuckRinging' },
	{ src: '/g8.jpeg', altKey: 'alt.galleryHunting' },
];
</script>
