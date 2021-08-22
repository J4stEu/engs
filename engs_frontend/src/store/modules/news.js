const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const state = {
    news: [],
    moreLoading: false,
    loadAvailable: true,
    post: {
        id: false,
        title: false,
        text: false,
        created: false
    },
    nearbyPost: {
        id: false,
        title: '...',
        text: false,
        created: false
    },
    lastPost: false
}
const mutations = {
    'SET_NEWS' (state, news) {
        state.news = news;
    },
    'NEWS_LOADING' (state) {
        state.moreLoading = !state.moreLoadings
    },
    'LOAD_MORE_NEWS' (state, news) {
        for (let i = 0; i <= news.length - 1; i++) {
            state.news.push(news[i]);
        }
    },
    'SET_POST' (state, post) {
        state.post.id = post[0].id;
        state.post.title = post[0].title;
        state.post.text = post[0].text;
        state.post.img = post[0].img;
        state.post.created = post[0].created;
    },
    'LAST_POST' (state, count) {
        state.lastPost = count;
    },
    'NEARBY_POST' (state, post) {
        state.nearbyPost.id = post[0].id;
        state.nearbyPost.title = post[0].title;
        state.nearbyPost.text = post[0].text;
        state.nearbyPost.created = post[0].created;
    },
    'CLEAN_NEARBY_POST' (state) {
        state.nearbyPost.id = false;
        state.nearbyPost.title = '...';
        state.nearbyPost.text = false;
        state.nearbyPost.created = false;
    }
}
const actions = {
    initNews: ({commit}) => {
        if (state.news.length == 0) {
            axios
            // .get('http://localhost:5000/api/news')
            .get('/api/news')
            .then(response => {
                //console.log(response.data)
                commit('SET_NEWS', response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    initMorePosts: ({commit}) => {
        axios
        // .get('http://localhost:5000/api/more_news', {
        //     params: {
        //         postsCounted: state.news.length
        //     }
        // })
        .get('/api/more_news', {
            params: {
                postsCounted: state.news.length
            }
        })
        .then(response => {
            //console.log(response.data);
            commit('LOAD_MORE_NEWS', response.data);
            if (response.data.length < 5) state.loadAvailable = false;
            else state.loadAvailable = true;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => (state.moreLoading = !state.moreLoading));
    },
    initPost: ({commit, dispatch}, postId) => {
        axios
        // .get('http://localhost:5000/api/init_post', {
        //     params: {
        //         postId: postId
        //     }
        // })
        .get('/api/init_post', {
            params: {
                postId: postId
            }
        })
        .then(response => {
            //console.log(response.data);            
            commit('SET_POST', response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            dispatch('countPosts');
        })
    },
    initNearbyPost: ({commit}, postId) => {
        if (postId < 1) return false
        axios
        // .get('http://localhost:5000/api/init_post', {
        //     params: {
        //         postId: postId
        //     }
        // })
        .get('/api/init_post', {
            params: {
                postId: postId
            }
        })
        .then(response => {
            //console.log(response.data);
            commit('NEARBY_POST', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    countPosts: ({commit}) => {
        axios
        // .get('http://localhost:5000/api/posts_count')
        .get('/api/posts_count')
        .then(response => {
            //console.log(response.data);
            commit('LAST_POST', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}
const getters = {
    news: state => state.news,
    moreLoading: state => state.moreLoading,
    loadAvailable: state => state.loadAvailable,
    post: state => state.post,
    nearbyPost: state => state.nearbyPost,
    lastPost: state => state.lastPost
}

export default {
    state,
    getters,
    actions,
    mutations,
} 