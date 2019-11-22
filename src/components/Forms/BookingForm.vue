<template>
  <div>
    <h2>Register</h2>
    <form action="#">
      <input v-model="email" type="email" placeholder="Enter e-mail" />
      <input v-model="name" type="text" placeholder="Full Name" />
      <input
        v-model="phoneNumber"
        type="text"
        placeholder="Phone Number please"
      />
      <select v-model="treatment">
        <option value="" disable selected>Select Treatment</option>
        <option value="LifeManagement">Life Management</option>
        <option value="Alcoholism">Alcoholism</option>
        <option value="McDonalds">McDonalds</option>
        <option value="Diabetes">Diabetes</option>
      </select>
      <p>appointment: insert calender here..</p>
      <select v-model="office">
        <option value="" disable selected>Select Office</option>
        <option value="Office1">Office 1</option>
        <option value="Office2">Office 2</option>
        <option value="Office3">Office 3</option>
        <option value="Office4">Office 4</option>
      </select>
      <button @click="submitBooking">Register</button>
    </form>
  </div>
</template>

<script>
import userData from "@/userData/userData";

export default {
  name: "BookingForm",
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      treatment: "",
      appointment: "",
      office: ""
    };
  },
  methods: {
    submitBooking() {
      userData.push({
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        treatment: this.treatment,
        appointment: this.appointment,
        office: this.office
      });
      this.resetFields();
    },
    resetFields() {
      this.name = "";
      this.email = "";
      this.phoneNumber = "";
      this.treatment = "";
      this.appointment = "";
      this.office = "";
    }
  }
};
</script>

<style scoped>
template > div {
  margin: 2em auto;
}

form {
  background: rgba(120, 183, 228, 0.96);
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 500px;
  margin: auto;
  padding: 10px;
  border-radius: 4px;
}

textarea {
  height: 300px;
  resize: none;
}

input:focus,
select:focus,
button:focus {
  border: 1px solid rgba(53, 73, 94, 1);
}
</style>
