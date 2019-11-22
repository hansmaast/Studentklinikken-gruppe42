<template>
  <div class="mainContainer">
    <div class="contentContainer">
      <h1>God morgen, Kari!</h1>
      <div class="infoCardContainer">
        <st-notification-card />
        <st-whos-working-card />
        <st-message-card />
      </div>
    </div>
  </div>
</template>

<script>
import StNotificationCard from "../../components/Cards/Notification/StNotificationCard";
import StWhosWorkingCard from "../../components/Cards/WhosAtWork/StWhosWorkingCard";
import StMessageCard from "../../components/Cards/Message/StMessageCard";

export default {
  name: "Login",
  components: { StNotificationCard, StWhosWorkingCard, StMessageCard },
  data() {
    return {};
  }
};
</script>

<style scoped>
.contentContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 80px;
  box-sizing: border-box;
}

.infoCardContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
}

.boxLink {
  width: 100%;
  height: 100%;
  margin: 20px;
  max-width: 228px;
  max-height: 268px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ebeff2;
  border-radius: 9px;
}

@media (max-width: 1070px) {
  .infoCardContainer {
    flex-direction: column;
  }

  .contentContainer {
    align-items: center;
  }
}
</style>
