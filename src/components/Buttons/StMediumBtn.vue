<template>
    <button class="st-medium-btn">{{label}}</button>
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
    .st-medium-btn {
        position: relative;
        padding: 13px 0;
        min-width: 130px;
        width: auto;
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