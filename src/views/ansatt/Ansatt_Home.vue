<template>
    <div class="mainContainer">
        <div class="contentContainer">
            <h1>God morgen, Kari!</h1>
            <div class="boxLinkContainer">
                <div class="boxLink">
                    <img src="../../../public/img/timelisteBoxImg.png" class="boxLinkImg"></img>
                    <p>Timeliste</p>
                </div>
                <div class="boxLink">
                    <img src="../../../public/img/kunderBoxImg.png" class="boxLinkImg"></img>
                    <p>Kunder</p>
                </div>
                <div class="boxLink">
                    <img src="../../../public/img/ansatteBoxImg.png" class="boxLinkImg"></img>
                    <p>Ansatte</p>
                </div>
            </div>
            <h4>BESKJED</h4>
            <ul>
                <li><span>Din neste kunde Marianne kommer kl 09.00</span></li>
                <li><span>PERSONALMØTE KL 16.00</span></li>
            </ul>
        </div>
        <st-ansatt-nav/>
    </div>
</template>

<script>
    import StAnsattNav from "@/views/ansatt/StAnsattNav";

    export default {
        name: 'Login',
        components: {StAnsattNav},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .contentContainer {
        width: 75%;
        height: 100%;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .boxLinkContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px 0;
    }

    .boxLink {
        width: 228px;
        height: 268px;
        background-color: #F4F4F7;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .boxLinkImg {
        width: 100%;
    }

    .boxLink > p {
        border-top: 1px solid #333333;
        width: 75%;
    }
</style>