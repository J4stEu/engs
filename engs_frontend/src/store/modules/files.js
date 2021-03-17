const axios = require('axios').default;
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
            //.post('http://192.168.31.247:5000/api/get_files')
            .post('/api/get_files')
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