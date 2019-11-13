<template>
    <div class="mainContainer">
        <h1>Studentklinikken</h1>
        <p>Hei! Vi tilbyr følgende:</p>
        <div class="treatments">
            <st-treatment-field treatment="Akupunktur"/>
            <st-treatment-field treatment="Kostholdsveiledning"/>
            <st-treatment-field treatment="Osteopati"/>
            <st-treatment-field treatment="Fysiologisk testlab"/>
        </div>
        <st-medium-btn label="BESTILL TIME"/>
        <st-quote-field/>
        <div class = "imgContainer">
            <img src="../../public/img/2ansatte.svg" alt="">

        </div>
    </div>
</template>

<script>

    // Tells the component what to export
    import StTreatmentField from "../components/Fields/StTreatmentField";
    import StMediumBtn from "../components/Buttons/StMediumBtn";
    import StQuoteField from "@/views/StQuoteField";

    export default {
        name: 'Home',
        components: {
            StQuoteField,
            StTreatmentField,
            StMediumBtn
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
    .mainContainer {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .treatments {
        margin-bottom: 10%;
    }

    .treatmentField > p {
        font-size: 18px;
        margin-left: 2pt;
    }


    .imgContainer {
        max-width: 400px;
        max-height: 400px;
        width: 75vw;
        height: 75vw;
    }

    .imgContainer > img {
        width: 100%;
    }
</style>