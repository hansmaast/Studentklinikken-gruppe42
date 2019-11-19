<template>
    <div class="mainContainer">
        <h1>Osteopati</h1>
        <p class="ingress">En osteopat undersøker og behandler muskel- og skjelettsmerter med manuelle
            behandlingsteknikker på benk. Terapeuten fokuserer på å avdekke funksjons- og bevegelsesforstyrrelser som
            kan være med på å skape smerte. Behandlingen egner seg for pasienter i alle aldere.</p>
        <st-medium-btn label="BESTILL TIME"/>
        <div class="imgContainer">
            <img src="../../public/img/Osteopati.svg" alt="">
        </div>
        <h4>OSTEOPATI SOM HELSEPROFESJON</h4>
        <p class="infoTxt">
            Osteopati baseres på vitenskapelige og kliniske fag. En osteopat undersøker og behandler ved hjelp av den
            biopsykososiale modellen og tar utgangspunkt i at god helse ikke bare er fravær av sykdom, men også et
            velfungerende muskel- og skjelettsystem. Gjennom osteopatibehandling ønsker en å fremme kroppens evne til å
            hjelpe seg selv. Behandlingen er trygg og individualisert. <br><br>

            Osteopaten vil sammen med deg lage en plan for dine behandlinger, og fortelle hva du kan forvente og hva du
            selv må ta ansvar for.
        </p>
        <div class="imgContainer">
            <img src="../../public/img/2Osteopati.svg" alt="">
        </div>
        <p>
            Førstegangs konsultasjon 90min / Oppfølgende konsultasjon 45min
        </p>
        <st-medium-btn label="BESTILL TIME"/>
    </div>
</template>

<script>
    import StMediumBtn from "../components/Buttons/StMediumBtn";

    export default {
        name: 'Home',
        components: {
            StMediumBtn
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    * {
        margin-bottom: 30pt;
    }

    h4 {
        max-width: 400px;
        max-height: 400px;
        margin-top: 0;
        margin-bottom: 20px;
    }

    p{
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 30px;
    }

    ul {
        margin: 0;
    }

    .infoTxt,
    li {
        max-width: 400px;
        max-height: 400px;
        width: 85vw;
        font-size: 14px;
        text-align: left;
        line-height: 18pt;
    }

    li {
        color: #CAE1E4;
        margin: 5px;
        font-size: 20px;
    }

    li > span {
        color: #333333;
        font-size: 14px;
        font-weight: 500;
    }

    .treatments {

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
        margin-bottom: 20px;
    }

    .imgContainer > img {
        width: 100%;
    }
</style>