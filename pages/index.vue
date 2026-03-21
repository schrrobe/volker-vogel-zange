<template>
	<div>
		<HomeSlider>
			<strong class="text-primary">{{ $t('homeView.titleHighligted') }}</strong>
			{{ $t('homeView.title') }}
		</HomeSlider>
		<PriceSection>
			{{ $t('homeView.headerTong') }}
		</PriceSection>
		<HomeWelcome :icon-boxes="iconBoxes">
			{{ $t('homeView.iconBoxTitle') }}
		</HomeWelcome>
		<RingSizeSection />
		<MoreBenefits :icon-boxes="iconBoxesMoreBenefits">
			<template #title>
				{{ $t('homeView.benefitsTitle') }}
			</template>
			<template #intro>
				{{ $t('homeView.benefitsIntro') }}
			</template>
		</MoreBenefits>
		<FotoGallery />
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iconBoxes = [
	{ icon: 'plumbing', text: t('homeView.iconBox.ringSize') },
	{ icon: 'verified', text: t('homeView.iconBox.ringDestruction') },
	{ icon: 'thumb_up', text: t('homeView.iconBox.easyHandling') },
	{ icon: 'handyman', text: t('homeView.iconBox.quality') },
];

const iconBoxesMoreBenefits = [
	{ icon: 'trip_origin', title: t('homeView.flexibilityTitle'), text: t('homeView.flexibilityText') },
	{ icon: 'done', title: t('homeView.durabilityTitle'), text: t('homeView.durabilityText') },
];
</script>
