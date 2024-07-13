<template>
  <client-only>
    <div class="row slider justify-center">
        <div class="col-xs-11 col-md-8 q-pa-xs">
          <div class="glass-box">
            <p class="glass-box-title">
              <strong>{{ $t('homeView.titleHighligted') }}</strong> {{ $t('homeView.title') }}
            </p>
          </div>
        </div>
    </div>
  </client-only>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

//.slider {
//  height: auto;
//  background-image: url('/bg-mobile.png');
//  background-repeat: no-repeat;
//  background-attachment: fixed;
//  background-position: center;
//  background-size: contain;
//
//  @include bp(m){
//    height: 70vh;
//    background-image: url('/bg-desktop.webp');;
//    background-size: cover;
//  }
//
//  @include bp(l){
//    background-image: url('/bg-desktop.webp');
//    background-size: cover;
//  }
//}
.slider {
  height: auto;
  background-image: url('/bg-mobile.png');
  background-repeat: no-repeat;
  background-attachment: scroll; /* Ändere dies von fixed auf scroll */
  background-position: center;
  background-size: contain;

  @include bp(m) {
    height: 70vh;
    background-image: url('/bg-desktop.webp');
    background-size: cover;
    background-attachment: fixed; /* Setze dies hier für Desktop-Browser */
  }

  @include bp(l) {
    background-image: url('/bg-desktop.webp');
    background-size: cover;
    background-attachment: fixed; /* Setze dies hier für Desktop-Browser */
  }
}

/* Spezifische Anpassungen für Safari */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .slider {
      background-attachment: scroll; /* Spezifische Anpassung für Safari */
    }

    @include bp(m) {
      .slider {
        background-attachment: fixed; /* Setze es für größere Bildschirme */
      }
    }

    @include bp(l) {
      .slider {
        background-attachment: fixed; /* Setze es für größere Bildschirme */
      }
    }
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
  color: black;
  line-height: 1.5;
  font-size: $headline-h2* 0.65;
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
