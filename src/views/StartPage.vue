<template>
    <div class="mainContainer">
        <div class="imgContainer"></div>
        <h2>Studentklinikken</h2>
        <st-big-btn label="LOGG INN"/>
        <st-big-btn label="REGISTRER DEG"/>
        <p>Fortsett uten bruker</p>
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