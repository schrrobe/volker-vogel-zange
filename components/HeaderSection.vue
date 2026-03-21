<template>
	<header
		class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60"
		role="banner"
	>
		<nav
			class="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8"
			aria-label="Main navigation"
		>
			<NuxtLink
				:to="localePath('/')"
				class="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
				:aria-label="t('seo.title')"
			>
				<span class="material-symbols-outlined text-primary text-3xl" aria-hidden="true">handyman</span>
				<span class="font-semibold text-lg hidden sm:inline">Beringungszange</span>
			</NuxtLink>

			<div class="flex items-center gap-2 sm:gap-4">
				<NuxtLink
					:to="localePath('/adressringzange')"
					class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
				>
					{{ t('footer.adressringzange') }}
				</NuxtLink>

				<!-- Language Selector -->
				<div ref="langDropdownRef" class="relative">
					<button
						ref="langButtonRef"
						class="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
						:aria-label="'Language: ' + currentLangName"
						aria-haspopup="listbox"
						:aria-expanded="langOpen"
						@click="langOpen = !langOpen"
						@keydown.escape="closeLangDropdown"
					>
						<span class="material-symbols-outlined text-lg" aria-hidden="true">language</span>
						<span class="hidden sm:inline">{{ currentLangName }}</span>
						<span class="material-symbols-outlined text-base" aria-hidden="true">expand_more</span>
					</button>
					<div
						v-if="langOpen"
						class="absolute right-0 top-full mt-1 z-50 w-56 max-h-80 overflow-y-auto rounded-lg border bg-white p-1 shadow-lg"
						role="listbox"
						:aria-label="'Select language'"
						@keydown.escape="closeLangDropdown"
					>
						<NuxtLink
							v-for="lang in langs"
							:key="lang.locale"
							:to="switchLocalePath(lang.locale)"
							class="block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							:class="locale === lang.locale ? 'bg-primary/10 text-primary font-medium' : 'text-foreground hover:bg-accent'"
							role="option"
							:aria-selected="locale === lang.locale"
							@click="langOpen = false"
							@keydown.escape="closeLangDropdown"
						>
							{{ lang.text }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const langOpen = ref(false);
const langDropdownRef = ref<HTMLElement | null>(null);
const langButtonRef = ref<HTMLElement | null>(null);

const langs = [
	{ locale: 'en', text: 'English (US)' },
	{ locale: 'gb', text: 'English (UK)' },
	{ locale: 'de', text: 'Deutsch' },
	{ locale: 'es', text: 'Español' },
	{ locale: 'fr', text: 'Français' },
	{ locale: 'ru', text: 'Русский' },
	{ locale: 'pl', text: 'Polski' },
	{ locale: 'sk', text: 'Slovenský' },
	{ locale: 'ja', text: '日本語' },
	{ locale: 'ar', text: 'العربية' },
	{ locale: 'nl', text: 'Nederlands' },
	{ locale: 'ae', text: 'العربية (UAE)' },
	{ locale: 'qa', text: 'العربية (Qatar)' },
	{ locale: 'ir', text: 'فارسی (Iran)' },
	{ locale: 'om', text: 'العربية (Oman)' },
	{ locale: 'bh', text: 'العربية (Bahrain)' },
	{ locale: 'pt', text: 'Português' },
	{ locale: 'cs', text: 'Čeština' },
];

const currentLangName = computed(() => {
	return langs.find(l => l.locale === locale.value)?.text ?? 'English';
});

function closeLangDropdown() {
	langOpen.value = false;
	langButtonRef.value?.focus();
}

function handleOutsideClick(e: MouseEvent) {
	if (langDropdownRef.value && !langDropdownRef.value.contains(e.target as Node)) {
		langOpen.value = false;
	}
}

onMounted(() => {
	document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
	document.removeEventListener('click', handleOutsideClick);
});
</script>
