export default {
  toggleNav() {
    const nav = document.querySelector("nav");
    nav.classList.contains("closeNav")
      ? nav.classList.replace("closeNav", "openNav")
      : nav.classList.replace("openNav", "closeNav");
  },
  login() {
    let loggedIn = true;
  }
};
