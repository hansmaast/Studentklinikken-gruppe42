<template>
  <div>
    <h3>Users</h3>
    <div>
      <UserInfo
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        :phone-number="user.phoneNumber"
        :treatment="user.treatment"
        :office="user.office"
        :appointment="user.appointment"
      />
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/Cards/UserInfo/UserInfo";
import userData from "@/userData/userData";

export default {
  name: "Users",
  components: { UserInfo },
  data() {
    return {
      users: userData
    };
  }
};
</script>
