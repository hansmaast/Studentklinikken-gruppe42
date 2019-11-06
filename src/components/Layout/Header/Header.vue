<template>
    <header>
        <router-link to="/" class="logoLink">
            <img alt="logo" src="#">
        </router-link>
        <h1>{{title}}</h1>
        <button @click="toggleNav">| | |</button>
        <NavLinks />
    </header>
</template>

<script>
    import NavLinks from "@/components/Layout/Header/NavLinks";
    import utils from "@/utils";
    export default {
        name: "HeaderWithSlideOutNav",
        components: {NavLinks},
        props: {
            title: String
        },
        methods: {
            toggleNav: utils.toggleNav
        }
    }
</script>

<style scoped>

    header {
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 70px;
        background-color: white;
        border-bottom: 1px solid #2c3e50;
        z-index: 0;
        width: 100vw;
    }

    header * {
        position: absolute;
    }

    button {
        padding: 0;
        width: 40px;
        height: 50px;
        right: 0;
        margin-right: 100px;
        border: none;
        border-radius: 5px;
        transform: rotate(90deg);
    }

    h1 {
        left: 50%;
        position: relative;
        transform: translate(-50%);
        align-self: center;
    }

    img {
        height: 70%;
    }

    .logoLink {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        height: 65px;
        width: 65px;
        left: 0;
        margin-left: 50px;
    }

    @media screen and (max-width: 900px) {
        button {
            margin-right: 20px;
        }
    }
</style>