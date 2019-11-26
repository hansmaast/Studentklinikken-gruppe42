<template>
  <div class="mainContainer">
    <h1>Historikk</h1>
    <p>
      Her er dine tidligere timer hos studentklinikken
    </p>
    <div class="bookingCard" v-for="b in this.user[0].booking">
      <p class="head">{{ b.treatment }}</p>
      <p class="date">Dato:</p>
      <p class="dateText">{{ b.date }}</p>
      <p class="time">Klokkeslett:</p>
      <p class="timeText">{{ b.time }}</p>
      <p class="address">Adressse:</p>
      <p class="addressText">{{ b.address }}</p>
    </div>
    <div v-if="displayModal" class="modal">
      <img
        src="../../public/icon/xIcon.svg"
        @click="displayModal = false"
        id="closeBtn"
      />
      <div class="modalInfoContainer">
        <p>
          Er du sikker på at du vil <br />
          avbestille timen din?
        </p>
        <h4>12. juli 2019 kl 15.00</h4>
        <st-medium-btn class="modalBtn" label="Bekreft avbestilling" />
        <p @click="displayModal = false">Avbryt</p>
      </div>
    </div>
  </div>
</template>

<script>
// Tells the component what to export
import userData from "../userData/userData";
import StMediumBtn from "../components/Buttons/StMediumBtn";

export default {
  name: "MyHistory",
  components: {
    StMediumBtn
    // Always declare the component you want to render
  },
  data() {
    // The userData object is bound to the v-model.. Needs some more knowlege about this
    return {
      displayModal: false,
      treatment: "Akupunktur",
      price: parseInt("200"),
      date: new Date(),
      hours: [
        "08.00",
        "09.00",
        "10.00",
        "11.00",
        "12.00",
        "13.00",
        "14.00",
        "15.00",
        "16.00",
        "17.00",
        "18.00"
      ],
      user: userData
    };
  },
  methods: {
    // This is the components method functions, it is basically functions inside an object
    alert(msg) {
      alert(msg); // Using "this" to refer to the components own properties?
    }
  }
};
</script>

<style scoped>

.mainContainer {
  margin-bottom: 0;
}

.bookingCard {
  width: 85vw;
  max-width: 400px;
  border-radius: 5px;
  display: grid;
  grid-template-areas: "head head head" "a b b" "c d d" "e f f" "info info info" "foot foot foot";
  background-color: rgba(28, 42, 105, 0.05);
  padding: 10px;
  padding-left: 30px;
}

.bookingCard > p {
  font-size: 14px;
  color: #9d9d9d;
  text-align: left;
}

.head {
  grid-area: head;
  width: 100%;
}

.date {
  grid-area: a;
}

.dateText {
  grid-area: b;
}

.time {
  grid-area: c;
}

.timeText {
  grid-area: d;
}

.address {
  grid-area: e;
}

.addressText {
  grid-area: f;
}

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
</style>
