<template>
  <section id="post">
    <div class="info">
        <div class="infoWrapper">
            <div class="postInfo">
                <p class="title">{{this.$store.getters.post.title}}</p>
                <div class="text">
                    <p v-html="'<p>' + $store.getters.post.text + '</p>'"></p>
                    <img v-if="$store.getters.post.img" v-bind:src="$store.getters.post.img" alt="postImg">
                    <p class="proverb" v-html="'Proverb: `' + proverb.text + '`'"></p>
                </div>
            </div>
            <div class="postAttr">
                <div class="postAttrWrapper">
                    <div class="mainAttr">
                        <p v-if="$store.getters.engTranslate" class="date"><u>Published:</u> {{$store.getters.post.created | dateFilter()}}</p>
                        <p v-else class="date"><u>Опубликовано:</u> {{$store.getters.post.created | dateFilter()}}</p>
                        <p v-if="$store.getters.engTranslate" class="hashTag"><u>Tags:</u> post</p>
                        <p v-else class="hashTag"><u>Теги:</u> post</p>
                    </div>
                    <div class="move">
                        <div class="nextMove">
                            <p class="nextPostTitle">{{$store.getters.nearbyPost.title}}</p>
                            <router-link :to="{name: 'Post', params: {id: parseInt(this.$route.params.id) + 1}}" v-if="$store.getters.engTranslate && this.$route.params.id != $store.getters.lastPost" class="nextPostButton" @mouseover.native="$store.dispatch('initNearbyPost', (parseInt($route.params.id) + 1))">
                                Next post
                            </router-link>
                            <router-link :to="{name: 'Post', params: {id: parseInt(this.$route.params.id) + 1}}" v-if="!$store.getters.engTranslate && this.$route.params.id != $store.getters.lastPost" class="nextPostButton" @mouseover.native="$store.dispatch('initNearbyPost', (parseInt($route.params.id) + 1))">
                                Следующая запись
                            </router-link>
                            <router-link :to="{name: 'Post', params: {id: parseInt(this.$route.params.id) - 1}}" v-if="$store.getters.engTranslate && this.$route.params.id != 1" class="previousePostButton" @mouseover.native="$store.dispatch('initNearbyPost', (parseInt($route.params.id) - 1))">
                                Previouse post
                            </router-link>
                            <router-link :to="{name: 'Post', params: {id: parseInt(this.$route.params.id) - 1}}" v-if="!$store.getters.engTranslate && this.$route.params.id != 1" class="previousePostButton" @mouseover.native="$store.dispatch('initNearbyPost', (parseInt($route.params.id) - 1))">
                                Предыдущая запись
                            </router-link>
                            <router-link v-if="$store.getters.engTranslate" to="/news">
                                Back
                            </router-link>
                            <router-link v-else to="/news">
                                Назад
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    data: function () {
        return {
            headerProverb: false
        }
    },
    methods: {
        fetchData() {
            if (this.$store.getters.news.length == 0) this.$store.dispatch('initPost', this.$route.params.id);
            else {
                if (this.$store.getters.news[this.$route.params.id - 1]) {
                    this.$store.commit('SET_POST', [this.$store.getters.news[this.$route.params.id - 1]]);
                    //console.log(this.$route.params.id - 1);
                    this.$store.commit('CLEAN_NEARBY_POST');
                    this.$store.dispatch('countPosts');
                } else this.$store.dispatch('initPost', this.$route.params.id);
            }
            this.$store.dispatch('initProverbs');
        }
    },
    computed: {
        proverb() {
            return this.$store.getters.proverb;
        },
    },
    created() {
        this.fetchData();
    },
    watch: {
        $route: 'fetchData'
    }
}
</script>

<style lang="scss" scoped>
    #post {
        width: 100vw;
        height: 100vh;
        overflow: auto;

        .info {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .infoWrapper {
                width: calc(100% - #{$spaceVal * 2 + px});
                height: calc(100% - #{$spaceVal * 2 + px});
                display: grid;
                grid-template-columns: 3fr 1fr;
                grid-gap: $spaceVal + px;
                
                .postInfo {
                    
                    .title {
                        font-weight: $fMedium;
                        font-size: 1.4em;

                        @media screen and (min-width:1800px){
                            font-size: 1.6em;
                        }
                        @media screen and (min-width:2800px){
                            font-size: 2em;
                        }
                        @media screen and (min-width:3800px){
                            font-size: 2.4em;
                        }
                    }
                    .text {
                        width: 100%;
                        height: fit-content;
                        
                        ::v-deep p {
                            text-indent: $spaceVal + px;

                            @media screen and (min-width:1800px){
                                font-size: 1.2em;
                            }
                            @media screen and (min-width:2800px){
                                font-size: 1.4em;
                            }
                            @media screen and (min-width:3800px){
                                font-size: 1.6em;
                            }
                        }
                        img {
                            width: 100%;
                        }
                        .proverb {
                            text-indent: 0;
                            color: $red;

                        }
                    }

                    :first-child {
                        margin-top: 0;
                    }
                }
                
                .postAttr {
                    position: relative;
                    margin-bottom: $spaceVal + px;

                    .postAttrWrapper {
                        position: fixed;

                        .mainAttr {
                            border-left: 1px solid $red;
                            padding: $spaceVal + px;

                            .date, .hashTag {
                                color: $red;

                                u {
                                    color: black;
                                }

                                @media screen and (min-width:1800px){
                                    font-size: 1.2em;
                                }
                                @media screen and (min-width:2800px){
                                    font-size: 1.4em;
                                }
                                @media screen and (min-width:3800px){
                                    font-size: 1.6em;
                                }
                            }

                            :first-child {
                                margin-top: 0;
                            }
                            :last-child {
                                margin-top: 0;
                            }
                        }
                        .move {
                            border-left: 1px solid $red;
                            margin-top: $spaceVal + px;
                            padding: $spaceVal + px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            .nextMove {
                                
                                div, a {
                                    display: block;
                                    width: max-content;
                                    cursor: pointer;
                                    color: $red;
                                    margin-bottom: $spaceVal/2 + px;
                                    text-decoration: underline;
                                }
                                
                                @media screen and (min-width:1800px){
                                    font-size: 1.2em;
                                }
                                @media screen and (min-width:2800px){
                                    font-size: 1.4em;
                                }
                                @media screen and (min-width:3800px){
                                    font-size: 1.6em;
                                }
                            }

                            @media screen and (min-width:0px) and (max-width:730px) {
                                margin-top: 0;
                            }
                            @media screen and (min-width:0px) and (max-width:430px) {
                                margin-top: 30px;
                            }
                        }

                        @media screen and (min-width:0px) and (max-width:730px) {
                            position: relative;
                            display: flex;
                            flex-direction: row-reverse;
                            justify-content: space-between;
                        }
                        @media screen and (min-width:0px) and (max-width:430px) {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }
                    }
                }

                @media screen and (min-width:0px) and (max-width:730px) {
                    grid-template-columns: none;
                }
            }
        }
    }
</style>