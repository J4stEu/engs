<template>
  <div id="app">
    <Preloader/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue';
export default {
  name: 'App',
  data: function () {
    return {
      //loading: true
    }
  },
  mounted: function () {
    /*setTimeout(() => {
      this.loading = false; 
    }, 2000);*/
  },
  components: {
    Preloader
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .backToMain {
      position: absolute;
      left: $spaceVal/2 + px;
      top: $spaceVal/2 + px;
      z-index: 1;
      cursor: pointer;

      svg {

        path {
          transition: fill 0.3s;
        }

        @media screen and (min-width:2300px) {
            transform: scale(1.3);
        }
        @media screen and (min-width:2800px) {
            transform: scale(1.6);
        }
      }

      &:hover svg path {
        fill: $red;
      }

      @media screen and (min-width:2800px) {
        left: $spaceVal/1.5 + px;
        top: $spaceVal/1.5 + px;
      }
    }
</style>
