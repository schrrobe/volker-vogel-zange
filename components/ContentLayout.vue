<template>
	<div class="layout-parent">
		<div class="layout">
			<slot />
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ContentLayout',
});
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';

.layout-parent {
  display: flex;
  justify-content: center;

  .layout {
    display: flex;
    max-width: $max-width;
    padding: 0;
    flex-direction: column;

    @include bp(m){
      padding: $pad;
    }

    &.full-height{
    height: 100%;
  }
  }

}
</style>
