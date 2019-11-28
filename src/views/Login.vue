<template>
  <div class="mainContainer">
    <st-login @log-in="sendMethod"/>
  </div>
</template>

<script>
import StLogin from "../components/Forms/StLogin";

export default {
  name: "Login",
  components: { StLogin },
  data() {
    return {};
  },
  methods: {
    sendMethod() {
     this.$emit('log-in');
      console.log('component');
    }
  }
};
</script>

<style scoped>
/*
        Ferdig med pirkings fra prototype
    */

.mainContainer {
  display: flex;
  margin-top: 166px;
}

.imgContainer > img {
  width: 100%;
  height: 100%;
}
</style>
