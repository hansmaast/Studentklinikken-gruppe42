<template>
    <div class="quoteContainer">
        <div class="iconContainer"></div>
        <div class="bigIconContainer"></div>
    </div>
</template>
<script>
    export default {
        name: 'st-quote-field'
    }
</script>
<style scoped>
    * {
        border: 1px dotted;
    }
    .quoteContainer {
        display: flex;
        width: 80vw;
        height: 20vh;
    }
    /*
        TODO: Align content in quoteContainer according to figma
    */
    .iconContainer {
        align-self: flex-start;
        width: 40pt;
        height: 40pt;
    }

    .bigIconContainer {
        align-self: flex-end;
        right: 100px;
        width: 40pt;
        height: 40pt;
    }

    .treatmentField > p {
        font-size: 18px;
        margin-left: 2pt;
    }

    .iconContainer > img {
        width: 100%;
        height: 100%;
    }
</style>