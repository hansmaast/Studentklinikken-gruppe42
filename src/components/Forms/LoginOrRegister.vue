<template>
    <div>
        <h2>Login || Register</h2>
        <form action="#">
            <input v-model="email" type="email" placeholder="e-mail">
            <input v-model="password" type="password" placeholder="password">
            <button class="yes" @click="doSomething">Login</button>
            <router-link class="maybe" to="register">Register</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'LoginOrRegister',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            doSomething() {
            }
        }
    }
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
        max-width: 400px;
        margin: 2em auto;
        padding: 10px;
        border-radius: 4px;
    }

    a {
        outline: none;
        margin: 5px 10px;
        font-size: 1em;
        padding: 0.7em;
        border-radius: 5px;
        border: 1px solid rgba(53, 73, 94, 0.3);
        box-shadow: 0px 5px 10px rgba(53, 73, 94, 0.2);
        transition: all 0.3s;
        text-decoration: none;
        color: #000;
    }

    input:focus,
    button:focus,
    a:focus {
        border: 1px solid rgba(53, 73, 94, 1);
    }

    /** Helpers **/
    .yes {
        background: rgba(65, 184, 131, 0.96);
    }

    .maybe {
        background: rgba(255, 192, 89, 0.88);
    }
</style>