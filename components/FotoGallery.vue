<template>
  <client-only>
    <section style="overflow-x: hidden;">
      <div class="row justify-center">
        <div
            v-for="img in images"
            :key="img.src"
            class="col-md-3 col-xs-12"
        >
          <lazy-nuxt-img
              class="image"
              :src="img.src"
              width="100vw"
              :height="img.height? img.height : '400px'"
          />
        </div>
      </div>
    </section>
  </client-only>
</template>

<script setup lang="ts">
const images = [
	{
		src: '/1.jpg',
		altText: 'Ringzange für Adressringe auf einem Stein mit anderen Falknersachen',
	},
	{
		src: '/g9.jpeg',
		altText: 'Weimaranerhund und Gerfalke auf einer Wiese',
	},
	{
		src: '/3.jpg',
		altText: 'Rackelwild wird beringt',
	},
	{
		src: '/4.jpg',
		altText: 'Adressringzange für Ente ',
	},
	{
		src: '/2.jpg',
		altText: 'Greifvogel Adressringzange',
	},
	{
		src: '/g6.jpg',
		altText: 'Adressringzange mit anderen Falknersachen',
	},
	{
		src: '/g7.jpg',
		altText: 'Ente wird beringt',
	},
	{
		src: '/g8.jpeg',
		altText: 'Gerfalke jagd KrähenS',
	},
];
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
</style>
