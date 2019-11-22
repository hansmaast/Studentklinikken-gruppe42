<template>
  <nav class="openNav" v-on:mouseleave="toggleNav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/userData">Users</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>
<script>
export default {
  name: "NavLinks",
  methods: {
    toggleNav() {
      const nav = document.querySelector("nav");
      nav.classList.contains("closeNav")
        ? nav.classList.replace("closeNav", "openNav")
        : nav.classList.replace("openNav", "closeNav");
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 900px) {
  nav {
    flex-direction: column;
    height: 100vh;
  }

  nav > a {
    width: 90vw;
    max-width: 200px;
    margin: 20px 5px;
  }
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 100%;
  background-color: rgba(65, 184, 131, 0.88);
  width: 100%;
}

nav > a {
  border: 1px solid;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 30px 5px;
  text-decoration: none;
  background-color: white;
}

/*Functionality*/
.openNav {
  transition: all 0.1s ease-in;
  transform: translate(0%, 0%);
}

.closeNav {
  transition: all 0.1s ease-out;
  transform: translate(100%, 0%);
}
</style>
