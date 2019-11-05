<template>
    <div>
        <h2>Login</h2>
        <login-or-register />
    </div>
</template>

<script>
    import LoginOrRegister from "@/components/Forms/LoginOrRegister";

    export default {
        name: 'Login',
        components: {LoginOrRegister},
        data() {
            return {}
        }
    }
</script>