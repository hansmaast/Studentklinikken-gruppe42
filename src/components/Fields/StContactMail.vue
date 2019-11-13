<template>
    <div class="fieldContainer">
        <div class="iconContainer">
            <img src="../../../public/icon/mailIcon.svg" alt="">
        </div>
        <p>{{this.email}}</p>
    </div>
</template>
<script>
    export default {
        name: 'st-contact-mail',
        props: {
            email: String
        }
    }
</script>

<style scoped>

    p {
        font-size: 14pt;
    }

    .fieldContainer {
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .iconContainer {
        grid-area: b;
        height: 20px;
        width: 20px;
    }

    .iconContainer > img {
        width: 100%;
        height: 100%;
    }
</style>