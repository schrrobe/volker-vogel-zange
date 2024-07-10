<template>
	<section class="window-width">
		<div class="row justify-center">
			<div
				v-for="img in images"
				:key="img.src"
				class="col-md-3 col-xs-12"
			>
				<lazy-nuxt-img
					:src="img.src"
					width="100%"
					:height="img.height? img.height : '400px'"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const images = [
	{
		src: '1.jpg',
		altText: 'Beringungszange für Adressringe auf einem Stein mat anderen Falknersachen',
		height: '400px',
	},
	{
		src: 'g9.jpeg',
		altText: 'Weimaranerhund und Gerfalke auf einer Wiese',
	},
	{
		src: 'g3.jpg',
		altText: 'Rackelwild wird beringt',
	},
	{
		src: 'g4.jpg',
		altText: 'Adressringzange für Ente ',
	},
	{
		src: '2.jpg',
		altText: 'Greifvogel Adressringzange',
	},
	{
		src: 'g8.jpeg',
		altText: 'Adressringzange mit anderen Falknersachen',
	},
	{
		src: 'g7.jpg',
		altText: 'Ente wird beringt',
	},
	{
		src: 'g6.jpg',
		altText: 'Gerfalke jagd KrähenS',
		height: '400px',
	},
];
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
.width{
}
</style>
