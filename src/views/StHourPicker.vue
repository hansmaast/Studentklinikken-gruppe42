<template>
    <div class="timeContainer">
        <div v-for="hour in hours" class="timeBox">
            {{hour}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'st-hour-picker',
        props: {
            hours: {}
        }
    }
</script>
<style scoped>
    .timeContainer {
        width: 85vw;
        max-width: 400px;
        height: 100px;
        border: 1px solid;
        display: flex;
        overflow-x: scroll;
    }

    .timeBox {
        width: 50px;
        height: 36px;
        border: 1px solid;
        margin: 10px;
    }
</style>