<template>
    <button>{{label}}</button>
</template>

<script>
    export default {
        name: 'st-small-btn',
        props: {
            label: String
        }
    }
</script>

<style scoped>
    button {
        position: relative;
        width: 90vw;
        font-size: 12px;
        max-width: 105px;
        max-height: 30px;
        text-align: center;
        background-color: #77999E;
        border-radius: 50px;
        outline: none;
        color: white;
    }
</style>