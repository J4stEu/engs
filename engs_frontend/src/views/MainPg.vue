<template>
  <div class="MainPg_wrapper">
    <section id="MainPg_section">
      <div class="MainBar">
        <div class="MainBar_wrapper">
          <div class="logoCoffee"></div>
          <transition name="fade">
            <div v-show="logoAccent" class="logo"></div>
          </transition>
          <MainPgNav  v-bind:onMenu="onMenu" 
                      @onMenuComp="onMenu = !onMenu"
                      @logoAccentComp="logoAccent = !logoAccent"
          />
          <div class="addition">
            <a v-bind:href="creator.link" target="blank">{{creator.copyright}}</a>
            <div v-if="!$store.getters.engTranslate" class="lang" @click="$store.dispatch('changeLang')">en</div>
            <div v-else class="lang" @click="$store.dispatch('changeLang')">ru</div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="MainBarMenu_sign" v-show="onMenu"></div>
      </transition>
    </section>
    <Contacts/>
  </div>
</template>

<script>
import MainPgNav from '../components/MainPgNav.vue';
import Contacts from '../components/Contacts.vue';
export default {
  name: 'MainPg',
  data: function () {
    return {
      creator: {
        copyright: '©J4stEu',
        link: 'https://vk.com/id188091326',
      },
      onMenu: false,
      logoAccent: false
    }
  },
  components: {
    MainPgNav,
    Contacts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .MainPg_wrapper {
    overflow: hidden;
  }
  #MainPg_section {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url($MainPgBg) no-repeat center bottom;
    background-size: calc(100% - 75px);
    display: flex;
    justify-content: center; 
    z-index: 1;
    box-shadow: inset 0px -5px 5px 0px rgba(50, 50, 50, 0.15);

    @media screen and (min-width:1600px) and (min-height:1024px) {
      background-size: calc(100% - 105px);
    }
    @media screen and (min-width:2560px) and (min-height:2048px) {
      background-size: calc(100% - 150px);
    }
    @media screen and (min-width:3840px) and (min-height:2400px) {
      background-size: calc(100% - 225px);
    }
  } 
  .MainBar {
    position: relative;
    width: $spaceVal * 10 + px;
    height: 100%;
    background: white;
    box-shadow: $shadow;
    z-index: 1;

    .MainBar_wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 480px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width:768px) and (min-height:1024px) {
      width: $spaceVal * 10 + 75 + px;
    }
    @media screen and (min-width:1024px) and (min-height:1366px) {
      width: $spaceVal * 10 + 150 + px;
    }
    @media screen and (min-width:1152px) and (min-height:864px) {
      width: $spaceVal * 10 + 75 + px;
    }
    @media screen and (min-width:1280px) and (min-height:800px) {
      width: $spaceVal * 10 + 75 + px;
    }
    @media screen and (min-width:1280px) and (min-height:1024px) {
      width: $spaceVal * 10 + 112.5 + px;
    }
    @media screen and (min-width:1600px) and (min-height:1200px) {
      width: $spaceVal * 10 + 187.5 + px;
    }
    @media screen and (min-width:1920px) and (min-height:1080px) {
      width: $spaceVal * 10 + 150 + px;
    }
    @media screen and (min-width:1920px) and (min-height:1200px) {
      width: $spaceVal * 10 + 225 + px;
    }
    @media screen and (min-width:2048px) and (min-height:1536px) {
      width: $spaceVal * 10 + 262.5 + px;
    }
    @media screen and (min-width:2560px) and (min-height:2048px) {
      width: $spaceVal * 10 + 487.5 + px;
    }
    @media screen and (min-width:3840px) and (min-height:2400px) {
      width: $spaceVal * 10 + 600 + px;
    }
  }
  .MainBarMenu_sign {
    position: absolute;
    width: 50%;
    height: 100%;
    background: white;
    right: 0;
  }
  .logo, .logoCoffee {
    width: $spaceVal * 4 + px;
    height: $spaceVal * 4 + px;
    background: url($MainPgLogo) no-repeat;
    background-size: contain;
    position: absolute;
    top: $spaceVal + px;
    left: 50%;
    transform: translate(-50%);

    @media screen and (min-width:768px) and (min-height:1024px) {
      width: $spaceVal * 6 + px;
      height: $spaceVal * 6 + px;
    }
    @media screen and (min-width:1024px) and (min-height:768px) {
      width: $spaceVal * 5 + px;
      height: $spaceVal * 5 + px;
    }
    @media screen and (min-width:1024px) and (min-height:1366px) {
      width: $spaceVal * 7 + px;
      height: $spaceVal * 7 + px;
    }
    @media screen and (min-width:1152px) and (min-height:864px) {
      width: $spaceVal * 5 + px;
      height: $spaceVal * 5 + px;
    }
    @media screen and (min-width:1280px) and (min-height:800px) {
      width: $spaceVal * 5 + px;
      height: $spaceVal * 5 + px;
    }
    @media screen and (min-width:1280px) and (min-height:1024px) {
      width: $spaceVal * 7 + px;
      height: $spaceVal * 7 + px;
    }
    @media screen and (min-width:1440px) and (min-height:900px) {
      width: $spaceVal * 6 + px;
      height: $spaceVal * 6 + px;
    }
    @media screen and (min-width:1600px) and (min-height:1024px) {
      width: $spaceVal * 7 + px;
      height: $spaceVal * 7 + px;
    }
    @media screen and (min-width:1600px) and (min-height:1200px) {
      width: $spaceVal * 8 + px;
      height: $spaceVal * 8 + px;
    }
    @media screen and (min-width:1920px) and (min-height:1080px) {
      width: $spaceVal * 7 + px;
      height: $spaceVal * 7 + px;
    }
    @media screen and (min-width:1920px) and (min-height:1200px) {
      width: $spaceVal * 8 + px;
      height: $spaceVal * 8 + px;
    }
    @media screen and (min-width:2048px) and (min-height:1536px) {
      width: $spaceVal * 10 + px;
      height: $spaceVal * 10 + px;
    }
    @media screen and (min-width:2560px) and (min-height:2048px) {
      top: $spaceVal * 2 + px;
      width: $spaceVal * 12 + px;
      height: $spaceVal * 12 + px;
    }
    @media screen and (min-width:3840px) and (min-height:2400px) {
      width: $spaceVal * 15 + px;
      height: $spaceVal * 15 + px;
    }
  }
  .logoCoffee {
    background: url($MainPgLogoCf) no-repeat;
  } 
  .addition {
    position: absolute;
    bottom: $spaceVal + px;
    color: $red;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    a, div {
      margin: $spaceVal/6 + px;
      text-decoration: underline;
      cursor: pointer;

      @media screen and (min-width:768px) and (min-height:1024px) {
        font-size: 1.4em;
      }
      @media screen and (min-width:1024px) and (min-height:1366px) {
        font-size: 1.6em;
      }
      @media screen and (min-width:1152px) and (min-height:864px) {
        font-size: 1.2em;
      }
      @media screen and (min-width:1280px) and (min-height:800px) {
        font-size: 1.2em;
      }
      @media screen and (min-width:1280px) and (min-height:1024px) {
        font-size: 1.4em;
      }
      @media screen and (min-width:1600px) and (min-height:1200px) {
        font-size: 1.8em;
      }
      @media screen and (min-width:2048px) and (min-height:1536px) {
        font-size: 2.5em;
      }
      @media screen and (min-width:2560px) and (min-height:2048px) {
        font-size: 3em;
      }
      @media screen and (min-width:3840px) and (min-height:2400px) {
        font-size: 3.8em;
      }
    }
    a {
      color: $red;
      margin-bottom: 0;
    }
    @media screen and (min-width:2560px) and (min-height:2048px) {
      bottom: $spaceVal * 2 + px;
    }
  }

  /*General media queries for small devices*/
  @media screen and (min-width:0) and (max-width:999px) {
    #MainPg_section {
        background: url($TwoBldBg) no-repeat center bottom;
        background-size: 132.5%;
    } 
  }
  @media screen and (min-width:0) and (max-width:499px) {
    .MainBar {
      box-shadow: none;
    }
    #MainPg_section {
      background: none;
      box-shadow: none;
    } 
    .MainBarMenu_sign, .menuSign {
      display: none;
    }
  }
  @media screen and (min-height:0) and (max-height:479px){
    .MainBar {
      overflow-y: auto;
      overflow-x: hidden;
    } 
  }
</style>
