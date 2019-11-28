<template>
  <div>
    <router-view @log-in="logIn" class="routerView" />
    <st-nav-bar v-if="loggedIn" />
  </div>
</template>

<script>
import StNavBar from "@/StNavBar";

export default {
  name: "userview",
  components: {
    StNavBar
  },
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    logIn() {
      this.loggedIn = true;
      console.log('view');
    }
  }
};
</script>

<style scoped>
.routerView {
  margin-bottom: 60px;
  transition: all 0.5s ease-out;
}
@media (min-width: 770px) {
  #navBar {
    top: 0%;
    transform: translate(0, 0%);
  }
  .routerView {
    margin-top: 61px;
    height: 100vh;
    width: 100vw;
  }
  .navElement {
    margin-left: 5vw;
    margin-right: 5vw;
  }
}
</style>
