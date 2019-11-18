<template>
    <div class="mainContainer">
        <h1>Fysiologisk <br> testlab</h1>
        <p class="ingress">
            Høyskolen Kristanias fysiologiske testlaboratorium er et topp moderne laboratorium som brukes til
            undervisning og forskning.
            <br><br>
            Også våre studenter, spesielt de på Bachelor i Fysisk aktivitet og ernæring, har mye undervisning i
            laboratoriet
        </p>
        <st-medium-btn label="BESTILL TIME"/>
        <div class="imgContainer">
            <img src="../../public/img/Testlab.svg" alt="">
        </div>
        <h4>FYSIOLOGISK TESTLAB</h4>
        <p class="infoTxt">Testing av egen helse er samtidig både motiverende og gir verdifull informasjon for mange
            andre. Derfor tilbyr vi tester til deg som ønsker å teste din fysiske tilstand og prestasjonsevne.
            <br><br>
            På testlaboratoriet finner vi ut hva status er nå, måler fremgang og gir deg videre råd og tilpasning av
            mosjon og trening.
        </p>
        <h4>BASISTESTEN FOR UTHOLDENHETSUTØVERE</h4>
        <p class="infoTxt">
            Testen forteller hvor stor kroppsmotor man har – også kalt oksygenopptak. Det maksimale
            oksygenopptaket er med på å bestemme din aerobe kapasitet, og brukes til å vurdere om treningen gir
            resultater.
        </p>
        <h4>
            ARBEIDS-EKG, INKLUDERT BLODTRYKKSMÅLING
        </h4>
        <p class="infoTxt">
            Et arbeids-EKG brukes først og fremst til å fremskaffe kunnskap om det foreligger tegn til hjerte- og
            karsykdom under fysiske anstrengelser.
            <br><br>
            Arbeids-EKGen utføres på sykkel under økende belastning, og sammen med måling av blodtrykk får testpersonen
            festet elektroder på kroppen som måler hjerteaktiviteten under testen.
            <br><br>
            Etter avsluttet test gjennomgås testresultatene med lege/testpersonell som igangsetter tiltak, hvis behov.
        </p>
        <div class="imgContainer">
            <img src="../../public/img/2Testlab.svg" alt="">
        </div>
        <h4>SPIROMETRI - LUNGEFUNKSJONSTEST</h4>
        <p class="infoTxt">
            Spirometri er en lungefunksjonsprøve. Spirometri måler to forskjellige egenskaper ved lungene; mengde
            (volum) luft som pustes ut og strømningshastigheten til denne luften (flow). Tilsammen gir målingene svært
            god informasjon om lungenes og luftveienes funksjoner. Spirometri brukes svært mye hos f.eks. astma- og
            KOLS-pasienter.
            <br><br>
            Målingene som gjøres ved spirometri er uavhengig av muskelstyrke og fysisk kondisjon, og gir derfor et
            objektivt mål på lungefunksjonen.
            <br><br>
            Høyskolen Kristiania er en ledende aktør i utviklingen av våre fagfelt. Fysiologisk testlaboratorium er en
            del av et aktivt læringsmiljø på høyskolen, med fokus på grundighet, kompetanse og sikkerhet. Som student på
            våre bachelorstudier får du prøvd ut dine kunnskaper i praksis.
        </p>
        <h4>LAKTATPROFIL</h4>
        <p class="infoTxt">
            Laktatprofiltesten brukes for å finne egnede intensitetssoner på trening. Denne testen ble tidligere kalt
            anaerob terskel og gjennomføres på tredemølle eller sykkel.
            <br><br>
            Her arbeides det med konstant belastning i fem minutter, så tas det en blodprøve og belastningen økes. Dette
            fortsetter til det er endel laktat i blodet, og belastningen oppleves som moderat hard til hard.
            <br><br>
            I tillegg til blodlaktat måler vi hjertefrekvens og oksygenopptak.
        </p>
        <p class="bold">Førstegangs konsultasjon 60min / Oppfølgende konsultasjon 45min</p>
        <st-medium-btn label="BESTILL TIME"/>
    </div>
</template>

<script>

    // Tells the component what to export
    import StMediumBtn from "../components/Buttons/StMediumBtn";

    export default {
        name: 'Home',
        components: {
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