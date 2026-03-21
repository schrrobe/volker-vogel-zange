<template>
	<section
		class="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] bg-cover bg-center bg-no-repeat"
		:style="{ backgroundImage: `url(${bgImage})` }"
		aria-label="Hero"
	>
		<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
		<div class="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
			<div class="rounded-2xl bg-white/20 p-6 sm:p-10 shadow-2xl backdrop-blur-md border border-white/30">
				<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
					<slot />
				</h1>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const bgImage = ref('/bg-mobile.png');

onMounted(() => {
	if (window.innerWidth >= 768) {
		bgImage.value = '/falken-federn.webp';
	}
});
</script>
