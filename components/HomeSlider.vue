<template>
	<div class="row slider">
		<div class="row justify-center ">
			<div class="col-xs-11 col-md-8">
				<div class="glass-box">
					<h1 class="glass-box-title">
						<strong>{{ $t('homeView.titleHighligted') }}</strong> {{ $t('homeView.title') }}
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

.slider {
  height: 70vh;
  background-image: url('https://abriumbi.sirv.com/volker-vogelringzange/bg-mobile.webp');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  @include bp(l){
    background-image: url('https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp')
  }
}

.glass-box {
  padding: $pad $pad * 2;
  margin-top: 5vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @include bp(m) {
    margin-top: 20vh;
  }
}

.glass-box-title{
  line-height: 1.5;
}

.triangle {
  width: 100%;
  min-height: 70vh;
  border-right: 60vw solid transparent;
  border-bottom: 120vw solid rgba(255, 255, 255, 0.7);
  background-image: url('https://cdn.quasar.dev/img/mountains.jpg');
  background-repeat: no-repeat;
}

.glass-bg {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(7.1px);
  padding: $pad;
  margin-top: 10%;
}
</style>
