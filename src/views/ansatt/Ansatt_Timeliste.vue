<template>
  <div class="mainContainer">
    <h1>Timesheet</h1>
    <st-time-sheet />
  </div>
</template>

<script>
  import StTimeSheet from "../../components/Grids/StTimeSheet";

  export default {
  name: "ansatttimeliste",
  components: {StTimeSheet},
  data() {
    return {
    };
  }
};
</script>

<style scoped>

.mainContainer {
  display: flex;
}

.imgContainer > img {
  width: 100%;
  height: 100%;
}
</style>
