<template>
    <div class="treatmentField">
        <p>{{this.treatment}}</p>
        <div class="iconContainer">
            <img src="../../../public/icon/arrowIcon.svg" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'st-treatment-field',
        props: {
            treatment: String
        }
    }
</script>
<style scoped>
    .treatmentField {
        border-bottom: 1px solid #9d9d9d;
        padding-top: 10pt;
        padding-bottom: 6px;
        margin: 1px 0;
        display: flex;
        width: 271px;
        height: 28px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .treatmentField > p {
        font-size: 18px;
        margin-left: 2pt;
    }

    .iconContainer {
        width: 19pt;
        margin-right: 10px;
    }

    .iconContainer > img {
        width: 100%;
        height: 100%;
    }
</style>