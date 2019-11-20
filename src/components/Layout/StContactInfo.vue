<template>
    <div class="contactContainer">
        <div class="line"></div>
        <st-contact-mail class="email" email="Studentklinikken@kristiania.no"/>
        <st-contact-phone class="phone" phone-nr="971 17 690"/>
    </div>
</template>
<script>
    import StContactMail from "../Fields/StContactMail"
    import StContactPhone from "../Fields/StContactPhone"

    export default {
        name: 'st-contact-info',
        components: {StContactMail, StContactPhone}
    }
</script>

<style scoped>
    .contactContainer {
        padding: 2px 0;
        display: grid;
        grid-template-areas:
                            "c a a a"
                            "c b b b";
        background-color: #f2f2f6;
        max-width: 400px;
        max-height: 100px;
        width: 85vw;
        margin-bottom: 20px;
        border-radius: 5px;
        align-items: center;
        box-sizing: border-box;
    }
    .line {
        grid-area: c;
        border-right: 0.5px #333333 solid;
        width: 60px;
        height: 70%;
        border-radius: 0;

    }
    .email {
        grid-area: a;
    }
    .phone{
        grid-area: b;
    }
    p {
        font-size: 14pt;
    }
</style>