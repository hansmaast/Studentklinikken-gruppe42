<template>
  <div class="mainContainer">
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
  justify-content: center;
  align-items: center;
}

.imgContainer > img {
  width: 100%;
  height: 100%;
}
</style>
