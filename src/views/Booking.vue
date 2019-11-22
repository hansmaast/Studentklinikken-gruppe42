<template>
  <div class="mainContainer">
    <h1>Studentklinikken</h1>
    <p class="ingress">
      Bestill time hos <br />
      studentklinikken
    </p>
    <!--        <st-booking-selector :price="price" :treatment="treatment"/>-->
    <div class="selectFields">
      <select v-model="treatment" name="treatment" class="selectField">
        <option value="Akupunktur" selected>Akupunktur</option>
        <option value="Kostholdsveiledning">Kostholdsveiledning</option>
        <option value="Osteopati">Osteopati</option>
        <option value="Fysiologisk testlab">Fysiologisk testlab</option>
      </select>
      <select v-model="price" name="prisKlasse" class="selectField">
        <option value="200" selected>Voksen</option>
        <option value="150">Student</option>
        <option value="150">Honnør</option>
        <option value="150">Ansatt</option>
      </select>
    </div>
    <h4>Velg dato:</h4>
    <date-picker class="calendar" v-model="date" color="teal" is-inline />
    <h4>Velg klokkeslett:</h4>
    <div id="hourPicker">
      <!--        <st-hour-picker id ="hourPicker" :hours="hours" :appointment="appointment"/>-->
      <div class="timeContainer">
        <div @click="selectTime" v-for="hour in hours" class="timeBox">
          {{ hour }}
        </div>
      </div>
    </div>
    <div id="textareaBooking">
      <textarea v-model="note" placeholder="Legg til kommentar her...">
      </textarea>
    </div>
    <p>Behandling: {{ this.treatment }}</p>
    <p>Dato: {{ this.date.toLocaleDateString() }}</p>
    <p>Klokkeslett: {{ this.time }}</p>
    <p>Pris: {{ this.price }},-</p>
    <router-link to="mybookings">
      <st-medium-btn @click.native="submitBooking" label="BESTILL" />
    </router-link>
  </div>
</template>

<script>
// Tells the component what to export
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import StMediumBtn from "../components/Buttons/StMediumBtn";
import userData from "../userData/userData";

export default {
  name: "Home",
  components: {
    DatePicker,
    StMediumBtn
    // Always declare the component you want to render
  },
  data() {
    // The userData object is bound to the v-model.. Needs some more knowlege about this
    return {
      // TODO: Link this to local storage?
      treatment: "Akupunktur",
      date: new Date(),
      time: "08:00",
      price: parseInt("200"),
      note: "",
      hours: [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
      ],
      user: userData
    };
  },
  methods: {
    // This is the components method functions, it is basically functions inside an object
    submitBooking() {
      // Using "this" to refer to the components own properties?
      this.user[0].booking.push({
        treatment: this.treatment,
        date: this.date.toLocaleDateString(),
        time: this.time,
        note: this.note,
        address: "Kirkegata 10A"
      });
      for (let i = 0; i < this.user[0].booking.length; i++) {
        console.log(this.user[0].booking[i]);
      }
    },
    selectTime(e) {
      let element = document.getElementsByClassName("timeBox");
      for (var i = 0; i < element.length; i++) {
        if (element[i].classList.contains("active")) {
          element[i].classList.remove("active");
        }
      }
      e.target.classList.toggle("active");
      this.time = e.target.innerText;
      // this.time != e.target.innerText ? this.time = e.target.innerText : this.time = "";
    }
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

textarea {
  width: 75vw;
  max-width: 400px;
  height: 100px;
  outline: none;
  margin: 5px 10px;
  font-size: 1em;
  padding: 0.7em;
  border-radius: 4px;
  border: 1px solid var(--main-gray);
  transition: all 0.3s;
}

textarea::placeholder {
  color: var(--main-gray);
}

.selectFields {
  width: 85vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selectField {
  -webkit-appearance: none;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border: 0;
  outline: none;
  background-color: inherit;
  border-bottom: 1px solid;
  border-radius: 0;
  appearance: none; /* Remove default arrow */
  background-image: url(../../public/icon/arrowDown.svg); /* Add custom arrow */
  background-repeat: no-repeat;
  background-position: right;
  font-size: 18px;
  padding: 0 5px 5px 5px;
}

.calendar {
  width: 85vw;
  max-width: 400px;
  border: none;
}

.timeContainer {
  width: 85vw;
  max-width: 400px;
  padding: 10px 0;
  border: none;
  overflow-x: scroll;
  display: -webkit-box;
  margin-bottom: 0px;
}

.timeContainer::-webkit-scrollbar {
  display: none;
}
/*TODO: Change layout for desktop*/
.timeBox {
  width: 50px;
  height: 36px;
  border: 1px solid #9d9d9d;
  margin: 0 7.5px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}

.active {
  background-color: rgb(119, 153, 158);
  color: white;
}
</style>
