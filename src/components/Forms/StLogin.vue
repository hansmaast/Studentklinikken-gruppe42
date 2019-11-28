<template>
  <div class="loginContainer">
    <h1>Logg inn</h1>
    <div class="fields">
      <st-input-email
        label="E-postadresse"
        type="email"
        placeholder="example@mail.com"
      />
      <st-input-password
        label="Passord"
        type="password"
        placeholder="Skriv inn ditt passord.."
      />
    </div>
    <div class="loginFoot">
      <p>Glemt passord?</p>
      <router-link to="home">
        <st-small-btn @click.native="logIn" label="LOGG INN" />
      </router-link>
    </div>
  </div>
</template>
<script>
import StInputEmail from "../Fields/StInputEmail";
import StInputPassword from "../Fields/StInputPassword";
import StSmallBtn from "../Buttons/StSmallBtn";

export default {
  name: "st-login",
  components: { StInputPassword, StInputEmail, StSmallBtn },
  methods: {
    logIn() {
      this.$emit('log-in');
      console.log('btn');
    }
  }
};
</script>
<style scoped>
.loginContainer {
  display: grid;
  grid-template-areas: "a" "b" "b" "b" "c";
  margin-bottom: 15px;
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
