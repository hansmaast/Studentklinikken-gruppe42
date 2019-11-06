<template>
    <div class="mainContainer">
        <st-login/>
        <div class="imgContainer">
            <img src="../../public/img/fluidPlants.svg" alt="">
        </div>
    </div>
</template>

<script>
    import StLogin from "../components/Forms/StLogin";

    export default {
        name: 'Login',
        components: {StLogin},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .mainContainer {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .imgContainer {
        max-width: 400px;
        max-height: 400px;
        width: 75vw;
        height: 75vw;
    }

    .imgContainer > img {
        width: 100%;
        height: 100%;
    }
</style>