<template>
	<div>
		<home-slider>
			<strong>{{ $t('homeView.titleHighligted') }}</strong> {{ $t('homeView.title') }}
		</home-slider>
		<content-layout>
			<content-section>
				<price-section>
					{{ $t('adressringzangeView.headerPriceSection') }}
				</price-section>
			</content-section>
		</content-layout>
		<content-layout>
			<content-section>
				<home-welcome :icon-boxes="iconBoxes">
					{{ $t('adressringzangeView.iconBoxTitle') }}
				</home-welcome>
			</content-section>
		</content-layout>
		<content-layout class="bg-primary">
			<content-section>
				<adressringzange-benefits-content />
			</content-section>
		</content-layout>
		<content-layout>
			<content-section>
				<more-benefits :icon-boxes="iconBoxesMoreBenefits">
					<template #title>
						{{ $t('adressringzangeView.benefitsTitle') }}
					</template>
					<template #intro>
						{{ $t('adressringzangeView.benefitsIntro') }}
					</template>
				</more-benefits>
			</content-section>
		</content-layout>
		<FotoGallery />
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iconBoxes = [
	{
		icon: 'plumbing',
		text: t('adressringzangeView.iconBox.ringSize'),
	},
	{
		icon: 'close',
		text: t('adressringzangeView.iconBox.noDestruction'),
	},
	{
		icon: 'thumb_up',
		text: t('adressringzangeView.iconBox.easyHandling'),
	},
	{
		icon: 'handyman',
		text: t('adressringzangeView.iconBox.longLife'),
	},
];

const iconBoxesMoreBenefits = [
	{
		icon: 'flag',
		title: t('adressringzangeView.madeInGermanyTitle'),
		text: t('adressringzangeView.madeInGermanyText'),
	},
	{
		icon: 'handyman',
		title: t('adressringzangeView.handMadeTitle'),
		text: t('adressringzangeView.handMadeText'),
	},

];
</script>

<style scoped lang="scss">

</style>
