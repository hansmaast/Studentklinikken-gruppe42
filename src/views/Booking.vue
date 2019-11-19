<template>
    <div class="mainContainer">
        <h1>Studentklinikken</h1>
        <p class="ingress">Bestill time hos <br> studentklinikken</p>
<!--        <st-booking-selector :price="price" :treatment="treatment"/>-->
        <div class="selectFields">
            <select v-model="treatment" name="treatment" id="selectTreatment">
                <option value="Akupunktur">Akupunktur</option>
                <option value="Kostholdsveiledning">Kostholdsveiledning</option>
                <option value="Osteopati">Osteopati</option>
                <option value="Fysiologisk testlab">Fysiologisk testlab</option>
            </select>
            <select v-model="price" name="prisKlasse" id="selectPrice">
                <option value="200">Voksen</option>
                <option value="150">Student</option>
                <option value="150">Honnør</option>
                <option value="150">Ansatt</option>
            </select>
        </div>
        <h4>Velg dato:</h4>
        <date-picker
                class="calendar"
                v-model="date"
                color="teal"
                is-inline
        />
        <h4>Velg klokkeslett:</h4>
        <div id="hourPicker">
<!--        <st-hour-picker id ="hourPicker" :hours="hours" :appointment="appointment"/>-->
            <div class="timeContainer">
                <div @click="addColor" v-for="hour in hours" class="timeBox">
                    {{hour}}
                </div>
            </div>
        </div>
        <div id="textareaBooking">
        <textarea placeholder="Legg til kommentar her...">
        </textarea>
        </div>
        <p>Behandling: {{this.treatment}}</p>
        <p>Dato: {{this.date.toLocaleDateString()}}</p>
        <p>Klokkeslett: {{this.time}}</p>
        <p>Pris: {{this.price}}</p>
        <router-link to="mybookings">
            <st-medium-btn @click="submitBooking" label="BESTILL"/>
        </router-link>
    </div>
</template>

<script>
    // Tells the component what to export
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'
    import StMediumBtn from "../components/Buttons/StMediumBtn";
    import userData from "../userData/userData";

    export default {
        name: 'Home',
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
                hours: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
                user: userData
            }
        },
        methods: {
            // This is the components method functions, it is basically functions inside an object
            submitBooking() {
                // Using "this" to refer to the components own properties?
                this.user[0].booking.push({
                    treatment: this.treatment,
                    date: this.date.toLocaleDateString(),
                    time: '12.30',
                    address: 'Waldemars Kjøkken 66'
                });
            },
            addColor(e) {
                let element = document.getElementsByClassName("timeBox");
                let color = "rgb(119, 153, 158)";
                for (var i = 0; i < element.length; i++) {
                    if (element[i].style.backgroundColor = color) {
                        element[i].style.backgroundColor = "";
                    }
                }
                console.log(e.target.style.backgroundColor);
                e.target.style.backgroundColor != color ? e.target.style.backgroundColor = color : e.target.style.backgroundColor = "";
                this.time = e.target.innerText;
            }
        }
    }
</script>

<style scoped>


    .selectFields {
        width: 85vw;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .selectFields > select {
        width: 100%;
        margin-bottom: 15px;
    }

    select {
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

    * {
        margin-bottom: 30pt;
    }

    h4 {
        max-width: 400px;
        max-height: 400px;
        margin-top: 0;
        margin-bottom: 20px;
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

    p {
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 30px;
    }
</style>