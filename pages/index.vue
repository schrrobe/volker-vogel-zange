<template>
	<!-- <div class="q-pa-md"></div> -->
	<div>
		<home-slider />
		<content-layout>
			<content-section>
				<price-section />
			</content-section>
		</content-layout>
		<content-layout>
			<content-section>
				<home-welcome />
			</content-section>
		</content-layout>
		<content-layout class="bg-primary">
			<content-section>
				<ring-size-section />
			</content-section>
		</content-layout>
		<content-layout>
			<content-section>
				<more-benefits />
			</content-section>
		</content-layout>
		<FotoGallery />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'HomeView',
	setup() {
		return {
			slide: ref(1),
		};
		// Setup-Logik hier
	},
});
</script>

<style>
</style>
