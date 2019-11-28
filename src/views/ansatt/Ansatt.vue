<template>
  <div class="viewContainer">
    <st-ansatt-nav v-if="loggedIn"/>
    <router-view @log-in="logIn" class="routerView" />
  </div>
</template>

<script>
import StAnsattNav from "@/views/ansatt/StAnsattNav";
import utils from "@/utils";

export default {
  name: "ansattView",
  components: {
    StAnsattNav
  },
  data() {
    // This is kind of the same as props? Hmm... Its sort of like a variable you can send to the components props?
    return {
      loggedIn: false
    };
  },
  methods: {
    logIn() {
      this.loggedIn = true
    }
  }
};
</script>

<style scoped>
.viewContainer {
  display: flex;
  flex-direction: row;
}
/*TODO: Add menu button for small screens..*/
@media (max-width: 770px) {
  .boxLinkContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
  }
  .ansattNav {
    position: absolute;
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
  }
}
</style>
