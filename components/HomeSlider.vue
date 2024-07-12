<template>
  <client-only>
    <div class="row slider">
      <div class="row justify-center ">
        <div class="col-xs-11 col-md-8">
          <div class="glass-box">
            <p class="glass-box-title">
              <strong>{{ $t('homeView.titleHighligted') }}</strong> {{ $t('homeView.title') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.slider {
  height: 90vh;
  background-image: url('https://abriumbi.sirv.com/volker-vogelringzange/bg-mobile.webp');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  @include bp(m){
    height: 70vh;
    background-image: url('https://abriumbi.sirv.com/volker-vogelringzange/bg-mobile.webp');
  }

  @include bp(l){
    background-image: url('https://abriumbi.sirv.com/volker-vogelringzange/bg-desktop.webp')
  }
}

.glass-box {
  padding: $pad $pad * 2;
  margin-top: 30vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @include bp(m) {
    margin-top: 10vh;
  }
}

.glass-box-title{
  line-height: 1.5;
  font-size: $headline-h2* 0.8;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word; /* Für ältere Browser */;
  @include bp(l) {
    font-size: $headline-h1;
    line-height:2.5;
  }
}

.glass-bg {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(7.1px);
  padding: $pad;
  margin-top: 10%;
}
</style>
