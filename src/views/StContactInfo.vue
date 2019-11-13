<template>
    <div>
        <st-contact-mail email="Studentklinikken@kristiania.no"/>
        <st-contact-phone phone-nr="971 17 690"/>
    </div>
</template>
<script>
    import StContactMail from "../components/Fields/StContactMail"
    import StContactPhone from "../components/Fields/StContactPhone"

    export default {
        name: 'st-contact-info',
        components: {StContactMail, StContactPhone}
    }
</script>

<style scoped>
    div {
        display: grid;
        grid-template-areas:
                            "a"
                            "b";
    }
    p {
        font-size: 14pt;
    }
</style>