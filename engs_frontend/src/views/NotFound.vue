<template>
    <section id="notFound">
        <router-link to="/" class="backToMain">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
        </router-link>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #notFound {
        width: 100vw;
        height: 100vh;
        background: url($NotFoundBg) no-repeat right bottom;
        background-size: calc(100% - #{$spaceVal + px});
    }
</style>