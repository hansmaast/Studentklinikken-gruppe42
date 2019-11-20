<template>
    <div class="mainContainer">
        <h1>Bookinger</h1>
        <p>{{this.user[0].name}}, <br> Her er dinne kommende timer👋</p>
        <div class="bookingCard" v-for="b in this.user[0].booking">
            <p class="head">{{b.treatment}}</p>
            <p class="date">Dato: </p>
            <p class="dateText">{{b.date}}</p>
            <p class="time">Klokkeslett:</p>
            <p class="timeText">{{b.time}}</p>
            <p class="address">Adressse: </p>
            <p class="addressText">{{b.address}}</p>
            <p class="info">
                Henvend deg alltid i besøksresepsjonen før konsultasjonen. Klinikken med venterom ligger i
                3. etg. i samme bygg. Vi har heis.
            </p>
            <st-medium-btn @click.native="displayModal = true" class="avbestill" label="Avbestill"/>
        </div>
        <div v-if="displayModal" class="modal">
            <img src="../../public/icon/xIcon.svg" @click="displayModal = false" id="closeBtn" />
            <div class="modalInfoContainer">
                <p>Er du sikker på at du vil <br> avbestille timen din?</p>
                <h4>12. juli 2019 kl 15.00</h4>
                <st-medium-btn class="modalBtn" label="Bekreft avbestilling"/>
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
        name: 'Home',
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
                hours: ["08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00"],
                user: userData
            }
        },
        methods: {
            // This is the components method functions, it is basically functions inside an object
            alert(msg) {
                alert(msg)// Using "this" to refer to the components own properties?
            }
        }
    }
</script>

<style scoped>
    .modal {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #77999E;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .modalInfoContainer {
        margin-bottom: 230px;
    }

    .modal > img,
    .modal > div > p,
    .modal > div > h4 {
        color: #FDFDFD;
        margin-bottom: 40px;
    }

    #closeBtn {
        align-self: flex-end;
        margin: 5vw;
    }

    .modalBtn {
        background-color: #333333;
        padding-left: 40px;
        padding-right: 40px;
        align-self: flex-end;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }

    .mainContainer {
        margin-bottom: 0;
    }

    .bookingCard {
        border: 1px solid;
        width: 85vw;
        max-width: 400px;
        display: grid;
        grid-template-areas: "head head head" "a b b" "c d d" "e f f" "info info info" "foot foot foot";
        background-color: rgba(28, 42, 105, 0.05);;
        padding: 10px;
    }

    .bookingCard > p {
        font-size: 14px;
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

    .info {
        grid-area: info;
        color: #636A7D;
    }

    .avbestill {
        grid-area: foot;
        margin: auto;
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
        height: 400px;
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