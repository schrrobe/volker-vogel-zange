<script setup lang="ts">
import { Separator as SeparatorPrimitive } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
import { cn } from '~/lib/utils';

const props = defineProps<{
	class?: HTMLAttributes['class']
	orientation?: 'horizontal' | 'vertical'
	decorative?: boolean
}>();
</script>

<template>
	<SeparatorPrimitive
		:class="cn(
			'shrink-0 bg-border',
			props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full',
			props.class,
		)"
		:orientation="props.orientation"
		:decorative="props.decorative"
	/>
</template>
