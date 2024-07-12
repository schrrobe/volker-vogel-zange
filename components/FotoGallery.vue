<template>
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
</template>

<script setup lang="ts">
const images = [
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/1.jpg',
		altText: 'Ringzange für Adressringe auf einem Stein mit anderen Falknersachen',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/g9.jpeg',
		altText: 'Weimaranerhund und Gerfalke auf einer Wiese',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/3.jpg',
		altText: 'Rackelwild wird beringt',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/4.jpg',
		altText: 'Adressringzange für Ente ',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/2.jpg',
		altText: 'Greifvogel Adressringzange',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/g6.jpg',
		altText: 'Adressringzange mit anderen Falknersachen',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/g7.jpg',
		altText: 'Ente wird beringt',
	},
	{
		src: 'https://abriumbi.sirv.com/volker-vogelringzange/g8.jpeg',
		altText: 'Gerfalke jagd KrähenS',
	},
];
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
</style>
