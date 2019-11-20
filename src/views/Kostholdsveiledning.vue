<template>
    <div class="mainContainer">
        <h1>Kostholdsveiledning</h1>
        <p class="ingress">Kostveiledningen gjøres av avgangsstudenter som tar en bachelorgrad i ernæring
            under veiledning av autoriserte kliniske ernæringsfysiologer.</p>
        <router-link to="booking">
            <st-medium-btn label="BESTILL TIME"/>
        </router-link>
        <div class="imgContainer">
            <img src="../../public/img/Kosthold.svg" alt="">
        </div>
        <h4>KOSTHOLDSVEILEDNING</h4>
        <p class="infoTxt">Veiledning passer ypperlig for deg som ønsker å forebygge sykdom,
            gå ned eller opp i vekt, spise optimalt med tanke på trening og prestasjon,
            har allergier eller intoleranse som krever tilpasning av kosten eller ønsker å ha et
            generelt sunt kosthold.
        </p>
        <p>Førstegangs konsultasjon 60min / Oppfølgende konsultasjon 45min</p>
        <router-link to="booking">
            <st-medium-btn label="BESTILL TIME"/>
        </router-link>
    </div>
</template>

<script>
    import StTreatmentField from "../components/Fields/StTreatmentField";
    import StMediumBtn from "../components/Buttons/StMediumBtn";
    import StQuoteField from "../components/Layout/StQuoteField";
    import StContactInfo from "../components/Layout/StContactInfo";

    export default {
        name: 'Home',
        components: {
            StContactInfo,
            StQuoteField,
            StTreatmentField,
            StMediumBtn
        },
        data() {
            return {}
        },
        methods: {}
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

    p {
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