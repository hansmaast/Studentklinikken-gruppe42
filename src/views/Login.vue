<template>
    <div class="mainContainer">
        <h1>Logg inn</h1>
        <st-input-icon
            label="E-postadresse"
            placeholder="example@mail.com"
            imgSrc="#"
        />
        <st-input-icon
                label="Passord"
                placeholder="**********"
                imgSrc="#"
        />
        <p>Glemt passord?</p>
        <div class="imgContainer"></div>
    </div>
</template>

<script>
    import StInputIcon from "../components/InputFields/StInputIcon";

    export default {
        name: 'Login',
        components: {StInputIcon},
        data() {
            return {}
        }
    }
</script>

<style>
    .mainContainer {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .imgContainer {
        border: 1px solid;
        max-width: 400px;
        max-height: 400px;
        width: 75vw;
        height: 75vw;
    }

    p {
        margin: 0px auto;
        max-width: 1000px;
        font-size: 14px;
    }
</style>