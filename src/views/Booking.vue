<template>
    <div class="mainContainer">
        <h1>Studentklinikken</h1>
        <p class="ingress">Bestill time hos <br> studentklinikken</p>
        <st-booking-selector :price="price" :treatment="treatment"/>
        <h4>Velg dato:</h4>
        <date-picker
                class="calendar"
                v-model="date"
                color="teal"
                is-inline
        />
        <h4>Velg klokkeslett:</h4>
        <div id="hourPicker">
        <st-hour-picker id ="hourPicker" :hours="hours"/>
        </div>
        <div id="textareaBooking">
        <textarea placeholder="Legg til kommentar her...">
        </textarea>
        </div>
        <p>Pris: {{this.price}}</p>
        <p>Behandling: {{this.treatment}}</p>
        <p>Dato: {{this.date.toLocaleDateString()}}</p>
        <router-link to="mybookings">
            <st-medium-btn @click="submitBooking" label="BESTILL"/>
        </router-link>
    </div>
</template>

<script>
    // Tells the component what to export
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'
    import StHourPicker from "@/views/StHourPicker";
    import StMediumBtn from "../components/Buttons/StMediumBtn";
    import StBookingSelector from "@/views/StBookingSelector";
    import userData from "../userData/userData";

    export default {
        name: 'Home',
        components: {
            StBookingSelector,
            StHourPicker,
            DatePicker,
            StMediumBtn
            // Always declare the component you want to render
        },
        data() {
            // The userData object is bound to the v-model.. Needs some more knowlege about this
            return {
                // TODO: Link this to local storage?
                treatment: "Akupunktur",
                price: parseInt("200"),
                date: new Date(),
                hours: ["08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00"],
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
            }
        }
    }
</script>

<style scoped>

    #hourPicker, #textareaBooking {
        display: -webkit-box;
        border: none;
    }

    .calendar {
        width: 85vw;
        max-width: 400px;
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
        width: 85vw;
        max-width: 400px;
        height: 100px;
        outline: none;
        margin: 5px 10px;
        font-size: 1em;
        padding: 0.7em;
        border-radius: 4px;
        border: 1px solid rgba(53, 73, 94, 0.3);
        box-shadow: 0px 5px 10px rgba(53, 73, 94, 0.2);
        transition: all 0.3s;
    }

    p {
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 30px;
    }
</style>