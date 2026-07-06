<template>
	<div>
		<HomeSlider>
			<strong class="text-primary">{{ $t('homeView.titleHighligted') }}</strong>
			{{ $t('homeView.title') }}
		</HomeSlider>
		<PriceSection>
			{{ $t('adressringzangeView.headerPriceSection') }}
		</PriceSection>
		<HomeWelcome :icon-boxes="iconBoxes">
			{{ $t('adressringzangeView.iconBoxTitle') }}
		</HomeWelcome>
		<AdressringzangeBenefitsContent />
		<MoreBenefits :icon-boxes="iconBoxesMoreBenefits">
			<template #title>
				{{ $t('adressringzangeView.benefitsTitle') }}
			</template>
			<template #intro>
				{{ $t('adressringzangeView.benefitsIntro') }}
			</template>
		</MoreBenefits>
		<CtaBand />
		<FotoGallery />
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iconBoxes = [
	{ icon: 'adjust', text: t('adressringzangeView.iconBox.ringSize') },
	{ icon: 'verified', text: t('adressringzangeView.iconBox.noDestruction') },
	{ icon: 'pan_tool', text: t('adressringzangeView.iconBox.easyHandling') },
	{ icon: 'handyman', text: t('adressringzangeView.iconBox.longLife') },
];

const iconBoxesMoreBenefits = [
	{ icon: 'workspace_premium', title: t('adressringzangeView.madeInGermanyTitle'), text: t('adressringzangeView.madeInGermanyText') },
	{ icon: 'handyman', title: t('adressringzangeView.handMadeTitle'), text: t('adressringzangeView.handMadeText') },
];
</script>
