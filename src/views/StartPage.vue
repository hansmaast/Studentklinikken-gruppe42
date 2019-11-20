<template>
    <div class="mainContainer">
        <div class="imgContainer">
            <img src="../../public/img/doctor.svg" alt="">
        </div>
        <h2>Studentklinikken</h2>
        <router-link to="register">
            <st-big-btn label="Registrer deg"/>
        </router-link>
        <router-link to="login">
            <st-big-btn label="Logg inn"/>
        </router-link>
        <router-link to="home">
            <p>Fortsett uten bruker</p>
        </router-link>
    </div>
</template>

<script>

    // Tells the component what to export
    import StBigBtn from "../components/Buttons/StBigBtn";

    export default {
        name: 'Home',
        components: {
            StBigBtn
            // Always declare the component you want to render
        },
        data() {
            // The userData object is bound to the v-model.. Needs some more knowlege about this
            return {
                textFromInput: 'Write something'
            }
        },
        methods: {
            // This is the components method functions, it is basically functions inside an object
            alertMessage() {
                // Using "this" to refer to the components own properties?
                alert(this.textFromInput)
            }
        }
    }
</script>

<style scoped>
    /*
        Marging and positions are up to date with the prototype:)
    */
    .mainContainer {
        justify-content: flex-start;
        margin-top: 92px;
    }

    h2 {
        margin: 0 auto 38px auto;
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