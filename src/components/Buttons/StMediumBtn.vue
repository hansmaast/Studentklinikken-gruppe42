<template>
    <button>{{label}}</button>
</template>

<script>
    export default {
        name: 'st-medium-btn',
        props: {
            label: String
        }
    }
</script>

<style scoped>
    button {
        position: relative;
        width: 90vw;
        height: 90vh;
        font-size: 14px;
        font-weight: bold;
        max-width: 110pt;
        max-height: 39pt;
        text-align: center;
        background-color: #77999E;
        border-radius: 50px;
        border: none;
        outline: none;
        color: white;
    }
</style>