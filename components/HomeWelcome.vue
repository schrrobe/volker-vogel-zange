<template>
	<div class="container-flex">
		<div class="q-mt-xl">
			<h2>
				<slot />
			</h2>
			<hr>
		</div>
		<div
			class="row"
			style="margin-top: 100px;"
		>
			<div
				v-for="iconBox in iconBoxes"
				:key="iconBox.icon"
				class="col-xs-12 col-md-3"
			>
				<div class="column items-center q-mb-lg">
					<q-icon
						:name="iconBox.icon"
						size="64px"
						color="primary"
						class="q-mb-lg"
					/>
					<h3>{{ iconBox.text }}</h3>
				</div>
			</div>

      <video width="100%" muted loop class="show-mobile">
        <source src="/fertigung.mov" type="video/mp4">
        Dein Browser unterstützt das Video-Tag nicht.
      </video>


    </div>
	</div>
</template>

<script setup>
defineProps({
	iconBoxes: {
		type: Array,
		default: () => [],
	},
});
</script>
