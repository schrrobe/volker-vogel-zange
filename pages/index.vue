<template>
	<div>
		<HomeSlider>
			<strong class="text-secondary">{{ $t('homeView.titleHighligted') }}</strong>
			{{ $t('homeView.title') }}
		</HomeSlider>
		<PriceSection>
			{{ $t('homeView.headerTong') }}
		</PriceSection>
		<HomeWelcome :icon-boxes="iconBoxes">
			{{ $t('homeView.iconBoxTitle') }}
		</HomeWelcome>
		<ProductFeatures ns="homeView" />
		<MoreBenefits :icon-boxes="iconBoxesMoreBenefits">
			<template #title>
				{{ $t('homeView.benefitsTitle') }}
			</template>
			<template #intro>
				{{ $t('homeView.benefitsIntro') }}
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
	{ icon: 'adjust', text: t('homeView.iconBox.ringSize') },
	{ icon: 'verified', text: t('homeView.iconBox.ringDestruction') },
	{ icon: 'pan_tool', text: t('homeView.iconBox.easyHandling') },
	{ icon: 'handyman', text: t('homeView.iconBox.quality') },
];

const iconBoxesMoreBenefits = [
	{ icon: 'tune', title: t('homeView.flexibilityTitle'), text: t('homeView.flexibilityText') },
	{ icon: 'shield', title: t('homeView.durabilityTitle'), text: t('homeView.durabilityText') },
];
</script>
