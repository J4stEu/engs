import Vue from 'vue'
import Vuex from 'vuex'
import files from './modules/files'
import gallery from './modules/gallery'
import news from './modules/news'
import proverbs from './modules/proverbs'
import lang from './modules/lang'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    news, 
    proverbs,
    gallery,
    files
  }
})
