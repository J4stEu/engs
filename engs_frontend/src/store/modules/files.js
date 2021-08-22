const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const state = {
    files: [],
}
const mutations = {
    'SET_FILES' (state, files) {
        state.files = files;
    },
}
const actions = {
    initFiles: ({commit}) => {
        if (state.files.length == 0) {
            axios
            // .get('http://localhost:5000/api/files')
            .get('/api/files')
            .then(response => {
                //console.log(response.data)
                commit('SET_FILES', response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
}
const getters = {
    files: state => state.files,
}

export default {
    state,
    getters,
    actions,
    mutations,
} 