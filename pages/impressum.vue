<template>
	<div class="py-12 md:py-20">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<article>
				<h1 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
					{{ t('impressum.header') }}
				</h1>
				<p class="text-muted-foreground mb-8">
					{{ t('impressum.subHeader') }}
				</p>

				<Separator class="mb-8" />

				<address class="not-italic space-y-1 text-foreground mb-10">
					<p class="font-semibold">Volker Jüngling</p>
					<p>Vormbrockweg 1c</p>
					<p>44149 Dortmund</p>
					<p>{{ t('impressum.tel') }} +49 (0) 231 2217134</p>
					<p>{{ t('impressum.mobil') }} +49 (0) 151 - 28803091</p>
					<p>
						{{ t('impressum.mail') }}
						<a href="mailto:v.juengling@t-online.de" class="text-primary hover:underline">
							v.juengling@t-online.de
						</a>
					</p>
				</address>

				<h2 class="text-2xl font-semibold text-foreground mb-4">
					{{ t('impressum.contact') }}
				</h2>
				<div class="space-y-1 text-foreground mb-10">
					<p>{{ t('impressum.contactPerson') }} Volker Jüngling</p>
					<p>{{ t('impressum.mobil') }} +49 (0) 151 288 030 91</p>
					<p>
						{{ t('impressum.mail') }}
						<a href="mailto:v.juengling@t-online.de" class="text-primary hover:underline">
							v.juengling@t-online.de
						</a>
					</p>
				</div>

				<h2 class="text-2xl font-semibold text-foreground mb-4">
					{{ t('impressum.consumerPoint') }}
				</h2>
				<p class="text-muted-foreground mb-6 leading-relaxed">
					{{ t('impressum.consumerPointText') }}
				</p>
				<p class="text-sm text-muted-foreground">
					{{ t('impressum.src') }}
					<a
						href="https://www.e-recht24.de"
						target="_blank"
						rel="noopener noreferrer"
						class="text-primary hover:underline"
					>
						e-recht24.de
					</a>
				</p>

				<Separator class="my-8" />

				<h2 class="text-2xl font-semibold text-foreground mb-4">
					Webdesign
				</h2>
				<div class="space-y-1 text-foreground">
					<p>
						<a
							href="https://prestige-webdesign.de/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary hover:underline"
						>
							Prestige Webdesign
						</a>
					</p>
					<p>
						{{ t('impressum.mail') }}
						<a href="mailto:info@prestige-webdesign.de" class="text-primary hover:underline">
							info@prestige-webdesign.de
						</a>
					</p>
				</div>
			</article>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Separator } from '~/components/ui/separator';

const { t } = useI18n();

useSeoMeta({
	robots: 'noindex',
});
</script>
