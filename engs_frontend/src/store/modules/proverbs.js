const axios = require('axios').default;
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const state = {
    proverb: false,
}
const mutations = {
    'SET_PROVERBS' (state, proverb) {
        state.proverb = proverb[0];
    },
}
const actions = {
    initProverbs: ({commit}) => {
        axios
        //.post('http://192.168.31.247:5000/api/proverb')
        .post('/api/proverb')
        .then(response => {
            //console.log(response.data)
            commit('SET_PROVERBS', response.data)
        })
        .catch(error => {
            console.log(error);
        });
    },
}
const getters = {
    proverb: state => state.proverb,
}

export default {
    state,
    getters,
    actions,
    mutations,
} 