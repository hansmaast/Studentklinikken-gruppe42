<template>
    <nav class="ansattNav">
        <div class="ansattInfo">
            <h3>Studentklinikken</h3>
            <div class="ansattImg"></div>
            <h3>Kari Olsen</h3>
            <p>email@gmail.com</p>
        </div>
        <router-link class="navLink" to="timeliste">
            <img src="../../../public/icon/ansatt/timesheet.svg" alt="">
            <h5>Timelister</h5>
        </router-link>
        <router-link class="navLink" to="kundeoversikt">
            <img src="../../../public/icon/ansatt/costumerAnsatt.svg" alt="">
            <h5>Kunder</h5>
        </router-link>
        <router-link class="navLink" to="timeliste">
            <img src="../../../public/icon/ansatt/mailAnsatt.svg" alt="">
            <h5>Email</h5>
        </router-link>
        <router-link class="navLink" to="ansattoversikt">
            <img src="../../../public/icon/ansatt/userAnsatt.svg" alt="">
            <h5>Ansatte</h5>
        </router-link>
    </nav>
</template>
<script>
    export default {
        name: 'st-ansatt-nav'
    }
</script>
<style scoped>
    /*
        Ferdig med pirkings fra prototype
    */

    h5 {
        margin: 0;
    }

    .ansattNav {
        position: absolute;
        height: 100vh;
        width: 300px;
        border-bottom-right-radius: 47px;
        border-top-right-radius: 47px;
        left: 0;
        background-color: #FEFEFE;
        box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .ansattInfo {
        width: 100%;
        border-bottom: 1px solid #EBEFF2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .ansattImg {
        border: 1px solid;
        border-radius: 50%;
        width: 111px;
        height: 111px;
    }

    .navLink {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
    }

    .navLink * {
        margin-left: 20px;
    }

    .imgContainer > img {
        width: 100%;
        height: 100%;
    }
</style>