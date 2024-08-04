<template>
	<div>
		<home-slider>
			<strong>{{ $t('homeView.titleHighligted') }}</strong> {{ $t('homeView.title') }}
		</home-slider>
		<content-layout>
			<content-section>
				<price-section>
					{{ $t('homeView.headerTong') }}
				</price-section>
			</content-section>
		</content-layout>
		<content-layout>
			<content-section>
				<home-welcome :icon-boxes="iconBoxes">
					{{ $t('homeView.iconBoxTitle') }}
				</home-welcome>
			</content-section>
		</content-layout>
		<content-layout class="bg-primary">
			<content-section>
				<ring-size-section />
			</content-section>
		</content-layout>
		<content-layout>
			<content-section>
				<more-benefits :icon-boxes="iconBoxesMoreBenefits">
					<template #title>
						{{ $t('homeView.benefitsTitle') }}
					</template>
					<template #intro>
						{{ $t('homeView.benefitsIntro') }}
					</template>
				</more-benefits>
			</content-section>
		</content-layout>
		<FotoGallery />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'HomeView',
	setup() {
		const { t } = useI18n();

		const iconBoxes = [
			{
				icon: 'plumbing',
				text: t('homeView.iconBox.ringSize'),
			},
			{
				icon: 'close',
				text: t('homeView.iconBox.ringDestruction'),
			},
			{
				icon: 'thumb_up',
				text: t('homeView.iconBox.easyHandling'),
			},
			{
				icon: 'handyman',
				text: t('homeView.iconBox.quality'),
			},
		];
		const iconBoxesMoreBenefits = [
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

		return {
			slide: ref(1),
			iconBoxes: iconBoxes, iconBoxesMoreBenefits,
		};
	},
});
</script>

<style>
</style>
