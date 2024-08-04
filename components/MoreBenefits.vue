<template>
	<div class="container-flex">
		<div class="q-mt-xl">
			<h2>
				<slot name="title" />
			</h2>
			<hr>
			<p class="mt-space-2">
				<slot name="intro" />
			</p>
		</div>
		<div
			class="row mt-space-2"
		>
			<div
				v-for="iconBox in iconBoxes"
				:key="iconBox.icon"
				class="col-xs-12 col-md-6 mt-space-mobile-1"
			>
				<div class="column items-center q-mb-lg q-pa-md">
					<q-icon
						:name="iconBox.icon"
						size="64px"
						color="primary"
						class="q-mb-lg"
					/>
					<h3>{{ iconBox.title }}</h3>
					<p class="text-center">
						{{ iconBox.text }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	iconBoxes: {
		type: Array,
		default: () => [],
	},
});
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
.space:nth-of-type(2) {

}
</style>
