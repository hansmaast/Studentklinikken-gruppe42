<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <CardRow label="E-mail: " :input="email" />
    <CardRow label="PhoneNr: " :input="phoneNumber.toString()" />
    <CardRow label="Appointment: " :input="appointment" />
    <CardRow label="Treatment " :input="treatment" />
    <CardRow label="Office: " :input="office" />
  </div>
</template>

<script>
import CardRow from "./CardRow";
export default {
  name: "UserInfo",
  components: { CardRow },
  props: {
    name: String,
    email: String,
    phoneNumber: String,
    treatment: String,
    appointment: String,
    office: String
  }
};
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 90vw;
  max-width: 600px;
  margin: 1em auto;
  box-shadow: 0px 5px 50px rgba(53, 73, 94, 0.1);
  background: white;
}

.cardRow {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

h3 {
  border-bottom: 1px dashed;
  text-align: center;
}
</style>
