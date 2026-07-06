<template>
	<Button
		as="a"
		:href="contact.mailto"
		:variant="mailVariant"
		size="lg"
		:class="cn('gap-2', mailClass)"
	>
		<span
			class="material-symbols-outlined text-lg"
			aria-hidden="true"
		>mail</span>
		{{ t('homeView.ctaMail') }}
	</Button>
	<Button
		as="a"
		:href="contact.whatsappUrl"
		target="_blank"
		rel="noopener noreferrer"
		:variant="whatsappVariant"
		size="lg"
		:class="cn('gap-2', whatsappClass)"
	>
		<WhatsappIcon />
		{{ t('homeView.ctaWhatsapp') }}
	</Button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Button, type ButtonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

withDefaults(defineProps<{
	mailVariant?: ButtonVariants['variant'];
	whatsappVariant?: ButtonVariants['variant'];
	mailClass?: string;
	whatsappClass?: string;
}>(), {
	mailVariant: 'default',
	whatsappVariant: 'secondary',
	mailClass: '',
	whatsappClass: '',
});

const { t } = useI18n();
const contact = useContact();
</script>
