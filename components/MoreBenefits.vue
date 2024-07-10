<template>
	<div class="container-flex">
		<div class="q-mt-xl">
			<h2>
				{{ $t('homeView.benefitsTitle') }}
			</h2>
			<hr>
			<p class="mt-space-2">
				{{ $t('homeView.benefitsIntro') }}
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iconBoxes = [
	{
		icon: 'trip_origin',
		title: t('homeView.flexibilityTitle'),
		text: t('homeView.flexibilityText'),
	},
	{
		icon: 'done',
		title: t('homeView.durabilityTitle'),
		text: t('homeView.durabilityText'),
	},

];
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
.space:nth-of-type(2) {

}
</style>
