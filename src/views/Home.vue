<template>
    <div class="mainContainer">
        <h1>Studentklinikken</h1>
        <p>Hei {{this.user[0].name}}! 👋 <br> Vi tilbyr:</p>
        <div class="treatments">
            <router-link to="akupunktur">
                <st-treatment-field treatment="Akupunktur"/>
            </router-link>
            <router-link to="kostholdsveiledning">
                <st-treatment-field treatment="Kostholdsveiledning"/>
            </router-link>
            <router-link to="osteopati">
                <st-treatment-field treatment="Osteopati"/>
            </router-link>
            <router-link to="fysiologisktestlab">
                <st-treatment-field treatment="Fysiologisk testlab"/>
            </router-link>
        </div>
        <router-link to="booking">
            <st-medium-btn label="BESTILL TIME"/>
        </router-link>
        <st-quote-field/>
        <!-- TODO: Fiks bilde slik at det blir bedre kvalitet?:) -->
        <div class="imgContainer">
            <img src="../../public/img/Vect.png" alt="">
        </div>
        <h4>BEHANDLINGSTILBUD</h4>
        <p class="infoTxt">Vi behandler akutte og langvarige plager / ubehag, men kan også hjelpe til med forebyggende
            tiltak.
            Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov. <br><br>
            Studentene har selv ansvar for konsultasjonene, men har alltid en erfaren veileder tilgjengelig. <br><br>
            Du trenger ikke henvisning fra lege.
        </p>
        <h4>PRISER</h4>
        <ul>
            <li>
                <span>Første behandling ordinær 300,- / rabatt* 150,-</span>
            </li>
            <li>
                <span>Oppfølgende behandling ordinær 220,- / rabatt*100,-</span>
            </li>
            <li>
                <span>*Rabatten gjelder: Honnør over 60 år, ungdom under 18 år, studenter og HK ansatte</span>
            </li>
            <li>
                <span>Kostveiledning er gratis</span>
            </li>
            <li>
                <span>Sommerklinikken for akupunktur og osteopati har egen priser</span>
            </li>
        </ul>
        <div class="imgContainer">
            <img src="../../public/img/DoctorLogo2.svg" alt="">
        </div>
        <h4>ADRESSE</h4>
        <p class="infoTxt">
            Prinsens gate 9, 0153 Oslo. Henvend deg alltid i Besøksresepsjonen før konsultasjonen. <br><br>
            Klinikken med venterom ligger i 3. etg. i samme bygg. Vi har heis.
        </p>
        <h4>HVILKEN BEHANDLING PASSER <br>BEST FOR DEG?</h4>
        <p class="infoTxt">Usikker på hvilken behandling som passer best for deg?
            Ta kontakt med oss så hjelper vi deg!
        </p>
        <st-contact-info/>
        <div class="imgContainer">
            <img src="../../public/img/MapPerson.svg" alt="">
        </div>
        <router-link to="booking">
            <st-medium-btn label="BESTILL TIME"/>
        </router-link>
    </div>
</template>

<script>

    // Tells the component what to export
    import StTreatmentField from "../components/Fields/StTreatmentField";
    import StMediumBtn from "../components/Buttons/StMediumBtn";
    import StQuoteField from "../components/Layout/StQuoteField";
    import StContactInfo from "../components/Layout/StContactInfo";
    import userData from "../userData/userData";

    export default {
        name: 'Home',
        components: {
            StContactInfo,
            StQuoteField,
            StTreatmentField,
            StMediumBtn
            // Always declare the component you want to render
        },
        data() {
            // The userData object is bound to the v-model.. Needs some more knowlege about this
            return {
                user: userData
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

    .mainContainer {
        margin-bottom: 0;
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