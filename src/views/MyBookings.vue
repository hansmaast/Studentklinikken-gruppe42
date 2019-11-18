<template>
    <div class="mainContainer">
        <h1>Bookinger</h1>
        <p>{{this.user[0].name}}, <br> Her er dinne kommende timer👋</p>
<!--        <div>-->
<!--            <p>{{this.user[0].booking[0].treatment}}</p>-->
<!--            <p>Dato: {{this.user[0].booking[0].date}}</p>-->
<!--            <p>Klokkeslett: {{this.user[0].booking[0].time}}</p>-->
<!--            <p>Adressse: {{this.user[0].booking[0].address}}</p>-->
<!--        </div>-->
        <div class="bookingCard" v-for="b in this.user[0].booking">
            <p>{{b.treatment}}</p>
            <p>Dato: {{b.date}}</p>
            <p>Klokkeslett: {{b.time}}</p>
            <p>Adressse: {{b.address}}</p>
        </div>
    </div>
</template>

<script>
    // Tells the component what to export
    import userData from "../userData/userData";
    import UserInfo from "../../src/components/Cards/UserInfo/UserInfo";
    export default {
        name: 'Home',
        components: {
            UserInfo
            // Always declare the component you want to render
        },
        data() {
            // The userData object is bound to the v-model.. Needs some more knowlege about this
            return {
                treatment: "Akupunktur",
                price: parseInt("200"),
                date: new Date(),
                hours: ["08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00"],
                user: userData
            }
        },
        methods: {
            // This is the components method functions, it is basically functions inside an object
            alertMessage() {
                // Using "this" to refer to the components own properties?
            }
        }
    }
</script>

<style scoped>

    .bookingCard {
        border: 1px solid;
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