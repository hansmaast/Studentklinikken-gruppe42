// This contains the components html && child components
<template>
  <div>
    <router-view class="routerView" />
    <st-nav-bar />
  </div>
</template>

<script>
import StNavBar from "@/StNavBar";

export default {
  name: "userview",
  components: {
    StNavBar
    // Always declare the component you want to render
  },
  data() {
    // This is kind of the same as props? Hmm... Its sort of like a variable you can send to the components props?
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.routerView {
  margin-bottom: 60px;
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
