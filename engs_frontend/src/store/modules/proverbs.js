const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
        // .get('http://localhost:5000/api/proverb')
        .get('/api/proverb')
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