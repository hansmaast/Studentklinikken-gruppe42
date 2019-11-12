<template>
    <div class="loginContainer">
        <h1>Registerer deg</h1>
        <div class="fields">
            <st-input-email
                    label="E-postadresse"
                    type="email"
                    placeholder="Skriv inn din e-post.."
            />
            <st-input-user
                    label="Navn"
                    type="text"
                    placeholder="Skriv inn ditt navn.."
            />
            <st-input-password
                    label="Passord"
                    type="password"
                    placeholder="Skriv inn ditt passord.."
            />
            <st-input-password
                    label="Passord"
                    type="password"
                    placeholder="Gjenta passord.."
            />
        </div>
        <div class="loginFoot">
            <router-link to="login">
                <p>Allerede bruker?</p>
            </router-link>
            <router-link to="home">
                <st-small-btn
                        label="FULLFØR"
                />
            </router-link>
        </div>
    </div>
</template>
<script>
    import StInputEmail from "../InputFields/StInputEmail";
    import StInputUser from "../InputFields/StInputUser";
    import StInputPassword from "../InputFields/StInputPassword"
    import StSmallBtn from "../Buttons/StSmallBtn";

    export default {
        name: 'st-register',
        components: {StInputPassword, StInputEmail, StInputUser, StSmallBtn}
    }
</script>
<style scoped>
    a {
        outline: none;
        text-decoration: none;
        color: inherit;
    }

    .loginContainer {
        display: grid;
        grid-template-areas: "a" "b" "b" "b" "c";
        margin-bottom: 15px;
    }

    h1 {
        grid-area: a;
    }

    .fields {
        grid-area: b;
    }

    .loginFoot {
        grid-area: c;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
</style>