<template>
  <div class="mainContainer">
    <h1>Studentklinikken</h1>
    <div class="imgContainer">
      <img src="../../public/img/twoBlubs.svg" alt="" />
    </div>
    <h4>RETTIGHETER</h4>
    <p class="infoTxt">
      Vi forholder oss til en rekke lover og regler som ivaretar dine
      pasientrettigheter. Våre studenter må samtykke til å følge dette lovverket
      før de starter sin kliniske praksisperiode.
      <br />
      <br />
      Under følger en oversikt over de mest relevante bestemmelsen for deg som
      pasient ved Studentklinikken tilhørende Institutt for Helsevitenskap.
    </p>
    <h4>DIN SIKKERHET</h4>
    <p class="infoTxt">
      Studenter i praksis skal praktisere i henhold til gjeldene lovverk.
      <br />
      <br />
      Alle saker som angår klienter / pasienter er konfidensielle jfr.
      Helsepersonelloven §§ 21 til 25 og Lov om alternativ behandling av sykdom
      mv. §4.
    </p>
    <h4>DINE PASIENTOPPLYSNINGER</h4>
    <p class="infoTxt">
      Vi registrerer, behandler og lagrer personopplysninger om pasienter i
      henhold til pasientjournalloven, personvernforordningen (GDPR),
      personopplysningsloven, helsepersonelloven.
      <br /><br />
      Informasjonen lagres i en elektronisk pasientjournal. Den inneholder navn,
      fødselsdato og kontaktinformasjon, samt opplysninger om diagnose,
      sykdomsforløp, behandling, hvilken informasjon som er gitt og andre
      forhold som kan være av betydning.
      <br /><br />
      Alle som har tilgang til dine personalia og pasientjournal er underlagt
      taushetsplikt.
      <br /><br />
      Studentenes tilgang til journalprogrammet er begrenset til de ukene de har
      praksis.
      <br /><br />
      Utlevering av journaler krever signert samtykkeskjema fra klient/pasient.
      <br /><br />
      Journaler skal oppbevares frem til det ikke lenger antas å være bruk for
      dem. Når dette ikke lenger er tilfellet, skal som en hovedregel journalene
      makuleres på betryggende vis. Normalt er dette 10 år.
    </p>
  </div>
</template>

<script>
// Tells the component what to export
import StTreatmentField from "../components/Fields/StTreatmentField";
import StMediumBtn from "../components/Buttons/StMediumBtn";
import StQuoteField from "../components/Layout/StQuoteField";
import StContactInfo from "../components/Layout/StContactInfo";

export default {
  name: "Rettigheter",
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
  max-width: 200px;
  max-height: 200px;
  width: 75vw;
  height: 75vw;
  margin-bottom: 10px;
}

.imgContainer > img {
  width: 100%;
  margin: 0;
}
</style>
