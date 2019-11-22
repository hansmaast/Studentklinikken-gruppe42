<template>
    <div class="boxLink">
        <h4 class="cardHead">
            <img src="../../../../public/icon/mailIcon.svg" alt=""/>
            MELDINGER
        </h4>
        <div class="notificationContainer">
            <st-card-message
                    v-for="msg in this.ansatt[0].messages"
                    :from="msg.from"
                    :msg="msg.msg"
            />
            <p>Du har ingen flere meldinger</p>
        </div>
    </div>
</template>
<script>
    import StCardMessage from "@/components/Cards/Message/StCardMessage";
    import { ansattData } from "../../../userData/ansattData";

    export default {
        name: "st-message-card",
        components: {StCardMessage},
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
