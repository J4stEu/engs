const state = {
    engTranslate: false,
}
const mutations = {
    'CHANGE_LANG'(state) {
        state.engTranslate = !state.engTranslate;
    }
}
const actions = {
    changeLang: ({commit}) => {
        commit('CHANGE_LANG')
    }
}
const getters = {
    engTranslate: state => state.engTranslate
}

export default {
    state,
    getters,
    actions,
    mutations,
} 