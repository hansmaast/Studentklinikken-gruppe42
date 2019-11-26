<template>
  <div class="mainContainer">
    <h1>Profil</h1>
    <div class="imgContainer">
      <img src="../../public/icon/accountIcon.svg" alt="">
    </div>
    <h4>NAVN</h4>
    <div class="treatments">
      <st-input-email placeholder="elisabeth@gmail.com"/>
      <st-input-phone placeholder="8372837"/>
      <router-link to="mybookings">
        <st-treatment-field treatment="Kommende timer" />
      </router-link>
      <router-link to="myhistory">
        <st-treatment-field treatment="Historikk" />
      </router-link>
      <router-link to="rettigheter">
        <st-treatment-field treatment="Dine rettigheter" />
      </router-link>
    </div>
    <router-link to="booking">
      <st-medium-btn label="BESTILL TIME" />
    </router-link>
  </div>
</template>

<script>
// Tells the component what to export
import StTreatmentField from "../components/Fields/StTreatmentField";
import StInputEmail from "../components/Fields/StInputEmail";
import StInputPhone from "../components/Fields/StInputPhone";
import StMediumBtn from "../components/Buttons/StMediumBtn";
import StQuoteField from "../components/Layout/StQuoteField";
import StContactInfo from "../components/Layout/StContactInfo";
import userData from "../userData/userData";

export default {
  name: "Home",
  components: {
    StContactInfo,
    StQuoteField,
    StTreatmentField,
    StInputEmail,
    StInputPhone,
    StMediumBtn
    // Always declare the component you want to render
  },
  data() {
    // The userData object is bound to the v-model.. Needs some more knowlege about this
    return {
      user: userData
    };
  },
  methods: {
    // This is the components method functions, it is basically functions inside an object
    alertMessage() {
      // Using "this" to refer to the components own properties?
      alert(this.textFromInput);
    }
  }
};
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


.treatmentField > p {
  font-size: 18px;
  margin-left: 2pt;
}

.imgContainer {
  max-width: 100px;
  max-height: 100px;
  width: 75vw;
  height: 75vw;
  margin-bottom: 20px;
  border-radius: 50%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #E8EFF7;
}

.imgContainer > img {
  width: 100%;
}
</style>
