<template>
  <section id="gallery">
    <router-link to="/" class="backToMain">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
    </router-link>
    <div class="galleryWrapper">
      <div class="galleryImg" v-for="img in imgs" :key="img.id" v-bind:class="'img' + img.id" v-bind:style="{backgroundImage: `url('${img.preview_src}')`}" @click="openImg(img)"> 
        <div class="interactiveShadow">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"/></svg>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="imgOpened" class="imageModal">
        <div class="imageShadow" @click="imgOpened = !imgOpened"></div>
        <img v-bind:src="imgOpened ? imgOpened.src : false" alt="" class="openedImage">
        <div class="moveLeft moveImage" @click="imgs[imgOpened.id - 2] ? openImg(imgs[imgOpened.id - 2]) : false">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
        </div>
        <div class="moveRight moveImage" @click="imgs[imgOpened.id] ? openImg(imgs[imgOpened.id]) : false">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
    data: function () {
        return {
            imgOpened: false,
        }
    },
    computed: {
      imgs() {
        return this.$store.getters.imgs;
      }
    },
    methods: {
      openImg(img) {
        this.imgOpened = img;
      },
      closeImg() {
        this.imgOpened = false;
      },
      btnPlace() {
        document.querySelector('.imageModal img').onload = function () {
          let space = 0;
          if (window.innerWidth > 900) space = 60; else space = 30;
          document.querySelector('.moveRight').style.right = ((window.innerWidth - document.querySelector('.imageModal img').width) / 2) - space + 'px';
          document.querySelector('.moveLeft').style.left = ((window.innerWidth - document.querySelector('.imageModal img').width) / 2) - space + 'px';
        }
      }
    },
    watch: {
      imgOpened: 'btnPlace'
    },
    created() {
      this.$store.dispatch('initGallery')
    },
}
</script>

<style lang="scss" scoped>
  #gallery {
    width: 100vw;
    height: 100vh;
    background: url($BigBen_LondonEye) no-repeat right bottom;
    background-size: calc(100% - #{$spaceVal + px});
    display: flex;
    justify-content: center;
    // align-items: center;
    overflow: auto;

    .galleryWrapper {
      width: calc(100% - #{$spaceVal * 3 + px});
      height: max-content;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: $spaceVal/2 + px;
      grid-template-areas: 
      'img1 img2 img3 img4'
      'img5 img6 img3 img7'
      'img8 img8 img9 img10'
      'img8 img8 img11 img12'
      ;
      margin: $spaceVal + 15 + px;

      .galleryImg {
        position: relative;
        width: calc(100% - #{$spaceVal * 2 + px});
        height: calc(100% - #{$spaceVal * 2 + px});
        padding: $spaceVal + px;
        background-color: $lightCoffee;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        cursor: pointer;

        @media screen and (min-width:0px) and (max-width:499px) {
          height: $spaceVal*5 + px;
        }
      }
      .img1 {
        grid-area: img1;
        @media screen and (min-width:0px) and (max-width:730px) {
          height: $spaceVal*5 + px;
        }
      }
      .img2 {
        grid-area: img2;
      }
      .img3 {
        grid-area: img3;
        height: 60vh;
      }
      .img4 {
        grid-area: img4;
      }
      .img5 {
        grid-area: img5;
        @media screen and (min-width:0px) and (max-width:730px) {
          height: $spaceVal*5 + px;
        }
      }
      .img6 {
        grid-area: img6;
      }
      .img7 {
        grid-area: img7;
      }
      .img8 {
        grid-area: img8;
        height: 60vh;
      }
      .img9 {
        grid-area: img9;
        @media screen and (min-width:0px) and (max-width:730px) {
          height: $spaceVal*5 + px;
        }
      }
      .img10 {
        grid-area: img10;
      }
      .img11 {
        grid-area: img11;
        margin-bottom: $spaceVal + px;
        @media screen and (min-width:0px) and (max-width:730px) {
          height: $spaceVal*5 + px;
        }
        @media screen and (min-width:0px) and (max-width:499px) {
          margin-bottom: 0;
        }
      }
      .img12 {
        grid-area: img12;
        margin-bottom: $spaceVal + px;
        @media screen and (min-width:0px) and (max-width:730px) {
          height: $spaceVal*5 + px;
        }
      }
      .interactiveShadow {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.3s;

          svg {
            transform: scale(1.6);

            path {
              fill: $red;
            }
          }

          &:hover{
            opacity: 1;
          }
      }

      @media screen and (min-width:0px) and (max-width:730px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
          'img1 img2'
          'img5 img6'
          'img3 img4'
          'img3 img7'
          'img8 img8'
          'img8 img8'
          'img9 img10'
          'img11 img12'
          ;
      }
      @media screen and (min-width:0px) and (max-width:499px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
          'img1'
          'img2'
          'img3'
          'img4'
          'img5'
          'img6'
          'img7'
          'img8'
          'img9'
          'img10'
          'img11'
          'img12'
          ;
      }
    }
    .imageModal {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      .imageShadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }
      .openedImage {
        z-index: 1;
        max-width: 80vw;
        max-height: 80vh;
        cursor: pointer;
      }
      .moveImage {
        display: block;
        position: fixed;
        cursor: pointer;
        top: 48vh;
        z-index: 1;

        svg {

          path {
            fill: $lightCoffee;
            transition: fill 0.3s;
          }

          &:hover path {
            fill: $red;
          }
        }
      }
    }
  }
</style>