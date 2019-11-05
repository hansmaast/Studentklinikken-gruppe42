<template>
    <div class="cardRow">
        <label>{{label}}</label>
        <p>{{input}}</p>
    </div>
</template>

<script>
    export default {
        name: 'CardRow',
        props: {
            label: String,
            input: String,
        }
    }
</script>

<style scoped>
    .cardRow {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
</style>