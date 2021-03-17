<template>
    <transition name="fade">
        <div v-show="loading" class="preloader">
            <div class="loader">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="cup"><span></span></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'preloader',
    data: function () {
        return {
            loading: true
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            setTimeout(() => {
                this.loading = false; 
            }, 1000);
        });
    }
}
</script>

<style lang="scss" scoped>
    .preloader {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: $lightCoffee;
        z-index: 2;    
        position: fixed;
        visibility: visible;
    }
    @keyframes wave {
        0% {opacity: 0; transform: translateY(15px)}
        50% {opacity: 1; transform: translateY(0)}
        100% {opacity: 0; transform: translateY(-15px)}
    }
    .loader {

        ul {
            margin: 0 0 10px 0;
            padding: 0;
            list-style: none;
            width: 60px;
            text-align: center;
            animation: wave 2.5s infinite linear;
            animation-fill-mode: forwards;

            li {
                display: inline-block;
                background: rgba(0, 0, 0, 0.3);
                height: 30px;
                width: 9px;
                border-radius: 0 100%;
                transform: rotate(12deg);
            }
        }
        .cup {
            background: $coffee;
            width: 60px;
            height: 54px;
            border-radius: 0 0 50% 50%;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                width: 66px;
                height: 20px;
                border-radius: 50%;
                background: inherit;
                left: -3px;
                top: -10px;
            }
            &::after {
                content: "";
                position: absolute;
                width: 56px;
                height: 12px;
                border-radius: 50%;
                background: #3A2F28;
                left: 2px;
                top: -6px;
            }

        }
        span {
            background: $coffee;
            width: 13px;
            height: 20px;
            position: absolute; 
            right: -13px;
            top: 10px;
            border-radius: 0 50% 50% 0;

            &::before {
                content: "";
                position: absolute;
                top: 4px;
                left: 0;
                background: $lightCoffee;
                width: 10px;
                height: 12px;
                border-radius: 0 50% 50% 0;
            }
            &::after {
                content: "";
                position: absolute;
                top: 40px;
                left: -50px;
                background: $coffee;
                width: 40px;
                height: 8px;
                border-radius: 50%;
            }
        }

        @media screen and (min-width:2300px) {
            transform: scale(1.6);
        }
        @media screen and (min-width:2800px) {
            transform: scale(1.9);
        }
    }
</style>