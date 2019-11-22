<template>
    <div class="boxLink">
        <h4 class="cardHead">
            <img src="../../../../public/icon/accountIcon.svg" alt=""/>
            PÅ JOBB I DAG
        </h4>
        <div class="notificationContainer">
            <st-card-at-work
                    v-for="worker in this.activeWorkers"
                    :name="worker.name"
                    :phoneNr="worker.phoneNumber"
            />
        </div>
    </div>
</template>
<script>
    import StCardAtWork from "@/components/Cards/WhosAtWork/StCardAtWork";
    import { activeWorkers } from "../../../userData/ansattData";

    export default {
        name: "st-whosworking-card",
        components: {StCardAtWork},
        data() {
            return {
                activeWorkers: activeWorkers
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
