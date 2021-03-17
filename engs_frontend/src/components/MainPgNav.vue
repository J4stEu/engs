<template>
    <nav>
        <ul v-if="!$store.getters.engTranslate">
            <li v-for="m_item in menu" :key="m_item.title"
                @mouseenter="m_item.onAb = overMenuItem(m_item.onAb)" 
                @mouseleave="m_item.onAb = overMenuItem(m_item.onAb)"
                @click="m_item.action"
                v-bind:class="{menuFocus: onMenu & !m_item.onAb}">
                <router-link v-if="m_item.path" v-bind:to="m_item.path">{{m_item.title.toUpperCase()}}</router-link>
                <p v-else>{{m_item.title.toUpperCase()}}</p>
            </li>
        </ul>
        <ul v-else>
            <li v-for="m_item in menu" :key="m_item.title"
                @mouseenter="m_item.onAb = overMenuItem(m_item.onAb)" 
                @mouseleave="m_item.onAb = overMenuItem(m_item.onAb)"
                @click="m_item.action"
                v-bind:class="{menuFocus: onMenu & !m_item.onAb}">
                <router-link v-if="m_item.path" v-bind:to="m_item.path">{{m_item.engTitle.toUpperCase()}}</router-link>
                <p v-else>{{m_item.engTitle.toUpperCase()}}</p>
            </li>
        </ul>
        <ul v-if="!this.$store.getters.engTranslate" class="menuSign">
            <li v-for="sign in menu" :key="sign.abTitle" v-bind:class="{menuSignShow: sign.onAb}">{{sign.abTitle}}</li>
        </ul>
        <ul v-else class="menuSign">
            <li v-for="sign in menu" :key="sign.abTitle" v-bind:class="{menuSignShow: sign.onAb}">{{sign.engAbTitle}}</li>
        </ul>
    </nav>
</template>

<script>
var VueScrollTo = require('vue-scrollto');

export default {
    data: function () {
        return {
            menu: [
                {
                    title: 'о нас',
                    engTitle: 'about us',
                    abTitle: 'вся необходимая информация о нас',
                    engAbTitle: 'some information about us',
                    action: false,
                    path: '/about',
                    onAb: false
                }
                ,
                {
                    title: 'галерея',
                    engTitle: 'gallery',
                    abTitle: 'посмотрите на нас вживую',
                    engAbTitle: 'look at us live',
                    action: false,
                    path: '/gallery',
                    onAb: false
                },
                {
                    title: 'новости',
                    engTitle: 'news',
                    abTitle: 'вся необходимая информация для вас',
                    engAbTitle: 'some information for you',
                    action: false,
                    path: '/news',
                    onAb: false
                },
                { 
                    title: 'контакты',
                    engTitle: 'contacts',
                    abTitle: 'свяжитесь с нами',
                    engAbTitle: 'contact us',
                    action: false,
                    path: false,
                    onAb: false
                }
            ]
        }
    },
    props: ['onMenu'],
    methods: {
        overMenuItem(sign) {
            this.$emit('logoAccentComp');
            if (((window.innerWidth > 1000) && (window.innerHeight > 500)) && !((window.innerWidth === 1024) && (window.innerHeight === 1366))) {
                this.$emit('onMenuComp');
                return !sign;
            } else return sign;
        },
    },
    mounted: function () {
        this.$nextTick(function () {
            this.menu[0].action = function () {
                return true;
            };
            this.menu[1].action = function () {
                return true;
            };
            this.menu[2].action = function () {
                return true;
            };
            this.menu[3].action = function () {
                var options = {
                    easing: 'linear',
                    /*offset: -60,
                    force: true,
                    cancelable: true,
                    onStart: function(element) {
                    // scrolling started
                    },
                    onDone: function(element) {
                    // scrolling is done
                    },
                    onCancel: function() {
                    // scrolling has been interrupted
                    },
                    x: false,
                    y: true*/
                };
                VueScrollTo.scrollTo("#contacts", 500, options);
            };
        })
    }
}
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        justify-content: center;
        padding: 0;

        li {
            margin: $spaceVal/2 + px;
            font-size: 1.2em;
            color: $coffee;
            transition: color .3s;
            cursor: pointer;
            text-align: center;
            transition: opacity 0.3s;

            a, p {
                font-weight: $fMedium;
                color: $coffee;
                text-decoration: none;
                margin: 0;

                &:hover {
                    color: $red;
                }
            }
            @media screen and (min-height:720px) {
                margin: $spaceVal + px;
            }
            @media screen and (min-width:768px) and (min-height:1024px) {
                font-size: 1.5em;
            }
            @media screen and (min-width:1024px) and (min-height:1366px) {
                font-size: 1.8em;
                margin: $spaceVal * 1.5 + px;
            }
            @media screen and (min-width:1152px) and (min-height:864px) {
                font-size: 1.3em;
            }
            @media screen and (min-width:1280px) and (min-height:800px) {
                font-size: 1.3em;
            }
            @media screen and (min-width:1280px) and (min-height:1024px) {
                font-size: 1.5em;
            }
            @media screen and (min-width:1600px) and (min-height:1024px) {
                font-size: 1.6em;
            }
            @media screen and (min-width:1600px) and (min-height:1200px) {
                margin: $spaceVal * 1.5 + px;
                font-size: 1.7em;
            }
            @media screen and (min-width:1920px) and (min-height:1080px) {
                font-size: 1.7em;
                margin: $spaceVal * 1.2 + px;
            }
            @media screen and (min-width:1920px) and (min-height:1200px) {
                font-size: 1.9em;
                margin: $spaceVal * 1.2 + px;
            }
            @media screen and (min-width:1920px) and (min-height:1200px) {
                font-size: 2.2em;
                margin: $spaceVal * 1.5 + px;
            }
            @media screen and (min-width:2048px) and (min-height:1536px) {
                font-size: 2.8em;
            }
            @media screen and (min-width:2560px) and (min-height:2048px) {
                font-size: 3.4em;
                margin: $spaceVal * 2.5 + px;
            }
            @media screen and (min-width:3840px) and (min-height:2400px) {
                font-size: 3.8em;
            }
        }
    }
    .menuSign {
        position: absolute;
        left: calc(100% + #{$spaceVal + px});
        top: 50%;
        transform: translate(0, -50%);
        margin: 0;

        li {
            font-size: 1.1em;
            font-weight: $fReqular;
            color: $red;
            text-align: left;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s;
            margin: $spaceVal/2 + 1 + px;
            cursor: default;

            @media screen and (min-width:0) and (max-width:1050px) {
                font-size: 1em;
                margin: $spaceVal/2 + 3 + px;
            }
            @media screen and (min-height:720px) {
                margin: $spaceVal + 1.5 + px;
            }
            @media screen and (min-width:1152px) and (min-height:864px) {
                margin: $spaceVal + 1.5 + px;
            }
            @media screen and (min-width:1200px) and (min-height:864px) {
                font-size: 1.2em;
                margin: $spaceVal + px;
            }
            @media screen and (min-width:1280px) and (min-height:800px) {
                font-size: 1.2em;
                margin: $spaceVal + 0.5 + px;
            }
            @media screen and (min-width:1280px) and (min-height:1024px) {
                margin: $spaceVal + 2.5 + px; 
            }
            @media screen and (min-width:1440px) and (min-height:900px) {
                font-size: 1.3em;
                margin: $spaceVal + px;
            }
            @media screen and (min-width:1600px) and (min-height:1024px) {
                font-size: 1.5em;
                margin: $spaceVal + 0.5 + px;
            }
            @media screen and (min-width:1600px) and (min-height:1200px) {
                margin: $spaceVal * 1.5 + 1.5 + px;
            }
            @media screen and (min-width:1920px) and (min-height:1080px) {
                font-size: 1.7em;
                margin: $spaceVal * 1.2 + px;
            }
            @media screen and (min-width:1920px) and (min-height:1200px) {
                font-size: 1.9em;
                margin: $spaceVal * 1.5 + 2 + px;
            }
            @media screen and (min-width:2048px) and (min-height:1536px) {
                font-size: 2.2em;
                margin: $spaceVal * 1.5 + 6 + px;
            }
            @media screen and (min-width:2560px) and (min-height:2048px) {
                font-size: 2.6em;
                margin: $spaceVal * 2.5 + 6 + px;
            }
            @media screen and (min-width:3840px) and (min-height:2400px) {
                font-size: 3.5em;
                margin: $spaceVal * 2.5 + 3 + px;
            }
        }
    }
    .menuFocus {
        opacity: 0.5;
    }
    .menuSignShow {
        opacity: 1 !important;
    }
</style>
