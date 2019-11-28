<template>
  <div class="mainContainer">
    <st-ansatt-login @log-in="logIn"/>
  </div>
</template>

<script>
import StAnsattLogin from "../../components/Forms/StAnsattLogin";

export default {
  name: "Login",
  components: { StAnsattLogin },
  methods: {
    logIn() {
      this.$emit('log-in');
      console.log("component");
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
/*
        Ferdig med pirkings fra prototype
    */

.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../public/img/LoginBackground.svg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
}

.imgContainer > img {
  width: 100%;
  height: 100%;
}
</style>
