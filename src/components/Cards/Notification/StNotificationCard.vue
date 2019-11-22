<template>
    <div class="boxLink">
        <h4 class="cardHead">
            <img src="../../../../public/icon/clandarIcon.svg" alt=""/>
            PÅMINNELSER
        </h4>
        <div class="notificationContainer">
            <st-card-notification
                    v-for="note in this.ansatt[0].notification"
                    :date="note.date"
                    :text="note.text"
            />
            <p>Du har ingen flere påminnelser</p>
        </div>
    </div>
</template>
<script>
    import StCardNotification from "@/components/Cards/Notification/StCardNotification";
    import { ansattData } from "../../../userData/ansattData";

    export default {
        name: "st-notification-card",
        components: {StCardNotification},
        data() {
            return {
                ansatt: ansattData
            };
        }
    };
</script>
<style scoped>

    .cardHead {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        border-bottom: 1px solid #333333;
        padding: 0 0 10px 10px;
        box-sizing: border-box;
        margin-bottom: 0;
    }

    .notificationContainer {
        width: 100%;
        overflow-y: scroll;
    }

    .cardHead > img {
        margin: 0 10px 0 0;
    }

    .boxLink > p {
        border-top: 1px solid #333333;
        width: 75%;
    }
</style>
