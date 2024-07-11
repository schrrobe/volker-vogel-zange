<template>
	<section class="section">
		<slot />
	</section>
</template>

<script setup>

</script>

<style lang="scss">
@import '../assets/scss/styles.scss';

.section {
  padding: $pad $pad;
  margin-top: 30px;
  margin-bottom: 60px;

  @include bp(m){
    padding: $pad $pad * 2;
  }

  .full-height {
    height: 100%;
  }
}
</style>
