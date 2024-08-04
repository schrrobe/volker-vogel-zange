<template>
	<div
		class="page-overlay"
		:class="{
			'page-overlay--full': full,
		}"
		@mousedown="handleClick"
	>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'PageOverlay',
	props: {

		full: {
			type: Boolean,
		},

	},
	mounted() {
		document.body.classList.add('no-scrolling');
	},
	unmounted() {
		document.body.classList.remove('no-scrolling');
	},
	methods: {
		handleClick(event) {
			if (event.target !== this.$el) {
				return;
			}
			this.$emit('click', event);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";
.page-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: $pad;
  overflow-y: scroll;
  background-color: rgb(55 55 55 / 90%);
  transition: all .3s ease-in-out;

  &.page-overlay--full {
    padding: 0;
  }
}
</style>
