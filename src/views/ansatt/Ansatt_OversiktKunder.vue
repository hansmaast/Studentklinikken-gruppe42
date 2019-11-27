<template>
    <div class="mainContainer">
        <h1>Kundeoversikt</h1>
        <div class="kunderContainer">
            <div class="leftContainer">
                <p v-for="user in users" @click="displayUser(user)">{{user.name}}</p>
            </div>
            <div class="rightContainer">
                <div class="content">
                    <h4>{{this.user.name}}</h4>
                    <p>{{this.user.phoneNumber}}</p>
                    <p>{{this.user.email}}</p>
                </div>
                <div class="content">
                    <h4>NOTAT</h4>
                    <p>{{this.user.notes}}</p>
                </div>
                <div class="content">
                    <h4>Kommende timer</h4>
                    <div class="card" v-for="booking in this.user.booking">
                        <h5>{{booking.treatment}}</h5>
                        <p>Dato: {{booking.date}}</p>
                        <p>Tid: {{booking.time}}</p>
                    </div>
                </div>
                <div class="content">
                    <h4>Historikk</h4>
                    <div class="card" v-for="booking in this.user.booking">
                        <h5>{{booking.treatment}}</h5>
                        <p>Dato: {{booking.date}}</p>
                        <p>Tid: {{booking.time}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import users from "../../userData/userData"

    export default {
        name: "kundeoversikt",
        components: {},
        methods: {
            displayUser(user) {
                this.user = user;
            }
        },
        data() {
            return {
                users: users,
                user: {}
            };
        }
    };
</script>

<style scoped>

    .mainContainer {
        display: flex;
    }

    .kunderContainer {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        height: 100%;
    }

    .leftContainer {
        width: 30vw;
        height: 100%;
        border: 1px solid;
        padding: 10px;
    }

    .leftContainer > p {
        text-align: left;
        margin: 0;
        border-radius: 50px;
        padding: 4px 10px;
    }

    .leftContainer > p:hover {
        background-color: #9d9d9d;
    }

    .rightContainer {
        width: 40vw;
        height: 100%;
        border: 1px solid;
        padding: 0 0 0 25px;
    }

    .content {
        border-bottom: 1px solid;
    }

    .content * {
        text-align: left;
    }

    .card {
        border: 1px solid;
        border-radius: 5px;
        width: 70%;
        margin: 15px 0;
        padding-left: 15px;
    }
    .rightContainer,
    .leftContainer {
        overflow-x: scroll;
        border-radius: 9px;
    }

    .imgContainer > img {
        width: 100%;
        height: 100%;
    }
</style>
