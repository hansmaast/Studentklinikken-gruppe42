<template>
  <div>
    <h2>Contact us:)</h2>
    <form action="#">
      <input v-model="email" type="email" placeholder="Enter e-mail" />
      <textarea v-model="message" placeholder="Say something.."></textarea>
      <button @click="doSomething">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      email: "",
      message: ""
    };
  },
  methods: {
    doSomething() {
      alert(this.message);
    }
  }
};
</script>

<style scoped>
div {
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
textarea:focus,
button:focus {
  border: 1px solid rgba(53, 73, 94, 1);
}
</style>
