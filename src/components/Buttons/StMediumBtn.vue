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
        padding: 13px 0;
        width: 130px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        background-color: #77999E;
        border-radius: 50px;
        border: none;
        outline: none;
        color: white;
    }
</style>