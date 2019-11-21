<template>
    <div class="mainContainer">
        <h1>Ansatt</h1>
        <st-ansatt-login/>
    </div>
</template>

<script>
    import StAnsattLogin from "../../components/Forms/StAnsattLogin";

    export default {
        name: 'Login',
        components: {StAnsattLogin},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    /*
        Ferdig med pirkings fra prototype
    */

    .mainContainer {
        display: flex;
        background-image: url("../../../public/img/LoginBackground.svg");
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
    }

    .imgContainer > img {
        width: 100%;
        height: 100%;
    }
</style>