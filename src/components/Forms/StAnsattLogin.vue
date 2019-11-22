<template>
  <div class="loginContainer">
    <h1>Logg inn</h1>
    <div class="fields">
      <st-input-user label="AnsattID" type="text" placeholder="4323542" />
      <st-input-password
        label="Passord"
        type="password"
        placeholder="Skriv inn ditt passord.."
      />
    </div>
    <div class="loginFoot">
      <p>Glemt passord?</p>
      <router-link to="ansatt/home">
        <st-small-btn label="LOGG INN" />
      </router-link>
    </div>
  </div>
</template>
<script>
import StInputUser from "../Fields/StInputUser";
import StInputPassword from "../Fields/StInputPassword";
import StSmallBtn from "../Buttons/StSmallBtn";

export default {
  name: "st-login",
  components: { StInputPassword, StInputUser, StSmallBtn }
};
</script>
<style scoped>
.loginContainer {
  display: grid;
  grid-template-areas: "a" "b" "b" "b" "c";
  margin-bottom: 15px;
  background-color: #fbfbfb;
  padding: 130px 65px;
  border: 1px solid #9d9d9d;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  grid-area: a;
  margin-top: 0;
  margin-bottom: 57px;
}

.fields {
  grid-area: b;
}

.loginFoot {
  grid-area: c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
