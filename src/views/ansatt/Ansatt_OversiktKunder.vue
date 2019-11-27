<template>
    <div class="mainContainer">
        <h1>Kundeoversikt</h1>
        <div class="kunderContainer">
            <div class="leftContainer">

            </div>
            <div class="rightContainer">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "kundeoversikt",
        components: {},
        data() {
            return {};
        }
    };
</script>

<style scoped>

    .mainContainer {
        display: flex;
    }

    .kunderContainer {
      width: 70%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      height: 100%;
    }

    .leftContainer {
        width: 20vw;
        height: 100%;
        border: 1px solid;
    }

    .rightContainer {
        width: 20vw;
        height: 100%;
        border: 1px solid;
    }

    .imgContainer > img {
        width: 100%;
        height: 100%;
    }
</style>
