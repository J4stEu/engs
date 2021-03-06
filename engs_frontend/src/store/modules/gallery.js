const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const state = {
    imgs: [],
}
const mutations = {
    'SET_GALLERY' (state, imgs) {
        state.imgs = imgs;
    },
}
const actions = {
    initGallery: ({commit}) => {
        if (state.imgs.length == 0) {
            axios
            // .get('http://localhost:5000/api/gallery')
            .get('/api/gallery')
            .then(response => {
                //console.log(response.data)
                commit('SET_GALLERY', response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
}
const getters = {
    imgs: state => state.imgs,
}

export default {
    state,
    getters,
    actions,
    mutations,
} 