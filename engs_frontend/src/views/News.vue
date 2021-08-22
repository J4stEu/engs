<template>
  <section id="news">
    <router-link to="/" class="backToMain">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
    </router-link>
    <div class="postsWrapper">
      <router-link v-for="post in news" :key="post.id" :to="{name: 'Post', params: {id: post.id}}">
        <p class="title">{{post.title}}</p>
        <p class="date">{{post.created | dateFilter()}}</p>
        <p v-if="!$store.getters.engTranslate" class="actionAccent">Подробнее...</p>
        <p v-else class="actionAccent">Keep reading...</p>
        <p class="someInfo" v-html="post.text"></p>
      </router-link>
      <div class="loadMore" @click="$store.commit('NEWS_LOADING'), $store.dispatch('initMorePosts')">
        <div class="preloader">
          <div class="loader">
              <ul>
                <li v-bind:class="{moreLoading: $store.getters.moreLoading}"></li>
                <li v-bind:class="{moreLoading: $store.getters.moreLoading}"></li>
                <li v-bind:class="{moreLoading: $store.getters.moreLoading}"></li>
              </ul>
              <div v-bind:class="{cupInteractive: !loadAvailable}" class="cup"><span></span></div>
          </div>
        </div>
        <transition v-if="$store.getters.loadAvailable" name="fade">
          <p v-if="$store.getters.engTranslate" v-show="!$store.getters.moreLoading">Load more...</p>
          <p v-else v-show="!$store.getters.moreLoading">Загрузить ещё...</p>
        </transition>
        <transition v-if="$store.getters.loadAvailable" name="fade">
          <p v-if="$store.getters.engTranslate" v-show="$store.getters.moreLoading" class="loading">Loading...</p>
          <p v-else v-show="$store.getters.moreLoading" class="loading">Загрузка...</p>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
Vue.filter('dateFilter', function (date) {
  let newDate = new Date(Date.parse(date));
  return (newDate.getDate() > 10 ? newDate.getDate() : '0' + newDate.getDate()) + '.' + (newDate.getMonth() > 10 ? newDate.getMonth() : '0' + newDate.getMonth()) + '.' + (newDate.getFullYear() > 10 ? newDate.getFullYear() : '0' + newDate.getFullYear());
});

export default {
  data: function () {
      return {
          /*
          news: [
            {
              id: 1,
              title: 'My title!',
              text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum molestiae nesciunt eaque nisi aliquam similique! Accusantium maiores aut totam aliquid, quod, ab saepe a ipsam fuga dolorum, laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?   in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?',
              created: '09.08.2020'
            }
          */
      }
  },
  computed: {
    news() {
      return this.$store.getters.news;
    },
    loadAvailable() {
      return this.$store.getters.loadAvailable;
    }
  },
  created() {
    this.$store.dispatch('initNews')
  }
}
</script>

<style lang="scss" scoped>
  #news {
    width: 100vw;
    height: 100vh;
    background: url($BigBen_LondonEye) no-repeat right bottom;
    background-size: calc(100% - #{$spaceVal + px});
    display: flex;
    justify-content: center;
    overflow: auto;
    
    .postsWrapper {
      width: calc(100% - #{$spaceVal * 3 + px});
      height: max-content;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 10 + px}, 1fr));
      grid-auto-rows: #{$spaceVal * 10 + px};
      grid-gap: $spaceVal/2 + px;
      justify-items: center;
      align-items: center;
      margin: 45px;

      @media screen and (min-width:0px) and (max-width:389px) {
        grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 10 - 60 + px}, 1fr));
        grid-auto-rows: #{$spaceVal * 10 - 60 + px};
      }
      @media screen and (min-width:0px) and (max-width:329px) {
          grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 10 - 90 + px}, 1fr));
          grid-auto-rows: #{$spaceVal * 10 - 90 + px};
      }
      @media screen and (min-width:1600px) {
          grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 13 + px}, 1fr));
          grid-auto-rows: #{$spaceVal * 13 + px};
      }
      @media screen and (min-width:2300px) {
          grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 16 + px}, 1fr));
          grid-auto-rows: #{$spaceVal * 16 + px};
      }
      @media screen and (min-width:2800px) {
          width: calc(100% - #{$spaceVal * 4 + px});
          height: calc(100% - #{$spaceVal * 4 + px});
          grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 19 + px}, 1fr));
          grid-auto-rows: #{$spaceVal * 19 + px};
      }
      @media screen and (min-width:3300px) {
          grid-template-columns: repeat(auto-fit, minmax(#{$spaceVal * 22 + px}, 1fr));
          grid-auto-rows: #{$spaceVal * 22 + px};
      }
  
      a {
        position: relative;
        width: calc(100% - #{$spaceVal * 2 + px});
        height: calc(100% - #{$spaceVal * 2 + px});
        padding: $spaceVal + px;
        margin: $spaceVal + px;
        text-decoration: none;
        color: black;
        background-color: #fff; 
        background-image: 
          linear-gradient(90deg, transparent 79px, transparent 81px),
          linear-gradient(#eee .1em, transparent .1em);
        background-size: 100% 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: $shadow;
        cursor: pointer;

        .someInfo {
          height: fit-content;
          text-overflow: clip;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;
          opacity: 0;
          transition: opacity 0.3s;

          @media screen and (min-width:1600px) {
              font-size: 1.2em;
          }
          @media screen and (min-width:2300px) {
              font-size: 1.4em;
          }
          @media screen and (min-width:2800px) {
              font-size: 1.6em;
          }
          @media screen and (min-width:3300px) {
              font-size: 1.8em;
          }
        }
        .title, .date, .actionAccent {
          position: absolute;
          font-size: 1.2em;
          z-index: 1;

          @media screen and (min-width:1600px) {
            font-size: 1.4em;
          }
          @media screen and (min-width:2300px) {
            font-size: 1.6em;
          }
          @media screen and (min-width:2800px) {
            font-size: 1.8em;
          }
          @media screen and (min-width:3300px) {
            font-size: 2em;
          }
        }
        .title {
          position: absolute;
          height: fit-content;
          left: 50%;
          top: calc(50% - #{$spaceVal/2 + px});
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .date {
          left: $spaceVal + px;
          top: 0;
          border-bottom: 2px solid $coffee;
        }
        .actionAccent {
          right: $spaceVal + px;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s;

          &::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: $coffee;
            transition: width 0.3s;
          }
        }

        &:hover .someInfo {
          opacity: 1;
        }
        &:hover .title {
          opacity: 0;
        }
        &:hover .actionAccent {
          opacity: 1;
        }
        &:hover .actionAccent::after {
          width: 100%;
          transition: width 0.3s;
        }
      }
      .loadMore {
        position: relative;
        width: calc(100% - #{$spaceVal * 2 + px});
        height: calc(100% - #{$spaceVal * 2 + px});
        padding: $spaceVal + px;
        margin: $spaceVal + px;
        text-decoration: none;
        color: black;
        background: $lightCoffee; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: $shadow;
        cursor: pointer;

        .preloader {
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width:100%;
          background: $lightCoffee;
          z-index: 1;    
          position: absolute;
          opacity: 1;
          visibility: visible;
        }
        @keyframes wave {
          0% {opacity: 0; transform: translateY(15px)}
          50% {opacity: 1; transform: translateY(0)}
          100% {opacity: 0; transform: translateY(-15px)}
        }
        .loader {

          ul {
            margin: 0 0 10px 0;
            padding: 0;
            list-style: none;
            width: 60px;
            text-align: center;
            animation: wave 2.5s infinite linear;
            animation-fill-mode: forwards;
            opacity: 0;

            li {
              display: inline-block;
              background: rgba(0, 0, 0, 0.3);
              height: 30px;
              width: 9px;
              border-radius: 0 100%;
              transform: rotate(12deg);
              opacity: 0;
            }
          }
          .cup, .cupInteractive {
            background: $coffee;
            width: 60px;
            height: 54px;
            border-radius: 0 0 50% 50%;
            position: relative;

            &::before {
              content: "";
              position: absolute;
              width: 66px;
              height: 20px;
              border-radius: 50%;
              background: inherit;
              left: -3px;
              top: -10px;
            }
            &::after {
              content: "";
              position: absolute;
              width: 56px;
              height: 12px;
              border-radius: 50%;
              background: #3A2F28;
              left: 2px;
              top: -6px;
            }
          }
          .cupInteractive {
            &::after {
              content: "";
              position: absolute;
              width: 56px;
              height: 12px;
              border-radius: 50%;
              background: $lightCoffee;
              left: 2px;
              top: -6px;
            }
          }
          span {
            background: $coffee;
            width: 13px;
            height: 20px;
            position: absolute; 
            right: -13px;
            top: 10px;
            border-radius: 0 50% 50% 0;

            &::before {
              content: "";
              position: absolute;
              top: 4px;
              left: 0;
              background: $lightCoffee;
              width: 10px;
              height: 12px;
              border-radius: 0 50% 50% 0;
            }
            &::after {
              content: "";
              position: absolute;
              top: 40px;
              left: -50px;
              background: $coffee;
              width: 40px;
              height: 8px;
              border-radius: 50%;
            }
          }

          @media screen and (min-width:2300px) {
            transform: scale(1.6);
          }
          @media screen and (min-width:2800px) {
            transform: scale(1.9);
          }
        }
        &.done{
            opacity: 0;
            visibility: hidden;
        }
        .moreLoading {
          opacity: 1 !important;
        }
        p {
          position: absolute;
          bottom: $spaceVal + px;
          font-weight: $fBold;
          z-index: 1;

          &::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: $coffee;
            transition: width 0.3s;
          }

          @media screen and (min-width:0px) and (max-width:329px) {
            bottom: $spaceVal/2 + px;
          }
          @media screen and (min-width:1600px) {
            font-size: 1.4em;
          }
          @media screen and (min-width:2300px) {
            font-size: 1.6em;
          }
          @media screen and (min-width:2800px) {
            font-size: 1.8em;
          }
          @media screen and (min-width:3300px) {
            font-size: 2em;
          }
        }
        .loading {

          &::after {
            height: 0;
          }
        }
        .noLoading {
          bottom: unset;
          color: $red;

          &::after {
            height: 0;
          }
        }

        &:hover p::after {
          width: 100%;
          transition: width 0.3s;
        }
      }
    }
  }

</style>