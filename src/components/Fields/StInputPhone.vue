<template>
  <div class="inputContainer">
    <input :type="this.type" :placeholder="this.placeholder" />
    <div class="iconContainer">
      <img src="../../../public/icon/phoneIcon.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "st-input-phone",
  props: {
    label: String,
    type: String,
    placeholder: String
  }
};
</script>

<style scoped>
* {
  font-size: 14px;
}

.inputContainer {
  border-bottom: 1px solid #9d9d9d;
  width: 271px;
  padding-bottom: 10px;
  margin-bottom: 0px;
  display: grid;
  justify-content: flex-start;
  align-items: flex-end;
  grid-template-areas:
    "b c c c";
}

input {
  grid-area: c;
  width: 230px;
  margin-left: 5px;
  outline: none;
  box-shadow: none;
  border: none;
  text-align: left;
  background-color: inherit;
}

.iconContainer {
  grid-area: b;
  height: 20px;
  width: 20px;
}

.iconContainer > img {
  width: 100%;
  height: 100%;
}
</style>
