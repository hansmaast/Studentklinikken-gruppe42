<template>
  <div class="mainContainer">
    <h1>Akupunktur</h1>
    <p class="ingress">
      Akupunktur er en persontilpasset behandling der diagnostikk, behandling og
      oppfølging er skreddersydd for hver pasient med sine unike særtrekk og
      behov under hvert trinn av behandlingen.
    </p>
    <router-link to="booking">
      <st-medium-btn label="BESTILL TIME" />
    </router-link>
    <div class="imgContainer">
      <img src="../../public/img/Akupunktur.svg" alt="" />
    </div>
    <h4>AKUPUNKTUR</h4>
    <p class="infoTxt">
      Enkelt fortalt virker akupunktur ved å stimulere perifere nerver og
      bindevev som frigjør signalstoffer som har en effekt på det sentrale
      nervesystemet. Disse signalstoffene regulerer områder i hjernen som blant
      annet påvirker det autonome nervesystemet. <br /><br />
      Akupunktøren vil i førstegangskonsultasjonen ha fokus på å få oversikt
      over symptomer og årsaksforhold. I behandlingen settes tynne nåler i
      spesifikke punkter på kroppen. I tillegg kan det gis annen behandling, for
      eksempel kopping-massasje eller varmende behandling. Det gid veiledning om
      kosthold og fysisk aktivitet når dette er aktuelt.
    </p>

    <div class="imgContainer">
      <img src="../../public/img/AkupunkturInfoBox.png" alt="" />
    </div>
    <p>Førstegangs konsultasjon 90min / Oppfølgende konsultasjon 45min</p>
    <router-link to="booking">
      <st-medium-btn label="BESTILL TIME" />
    </router-link>
  </div>
</template>

<script>
// Tells the component what to export
import StTreatmentField from "../components/Fields/StTreatmentField";
import StMediumBtn from "../components/Buttons/StMediumBtn";
import StQuoteField from "../components/Layout/StQuoteField";
import StContactInfo from "../components/Layout/StContactInfo";

export default {
  name: "Home",
  components: {
    StContactInfo,
    StQuoteField,
    StTreatmentField,
    StMediumBtn
  },
  data() {
    return {};
  },
  methods: {
    alertMessage() {}
  }
};
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
  color: #cae1e4;
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
  width: 85vw;
  height: 75vw;
  margin-bottom: 20px;
}

.imgContainer > img {
  width: 100%;
}
</style>
