<template>
    <nav id="navBar">
        <router-link to="home">
            <div @click="selectNav(0)" class="navElement">
                <div class="navIcon activeNav">
                    <img src="../public/icon/homeIcon.svg" alt="">
                    <!--                        <img class="blub" src="../public/icon/blub.svg" alt="">-->
                </div>
                <p>Hjem</p>
            </div>
        </router-link>
        <router-link to="mybookings">
            <div @click="selectNav(1)" class="navElement">
                <div class="navIcon">
                    <img src="../public/icon/clandarIcon.svg" alt="">
                </div>
                <p>Bookinger</p>
            </div>
        </router-link>
        <router-link to="profile">
            <div @click="selectNav(2)" class="navElement">
                <div class="navIcon">
                    <img src="../public/icon/accountIcon.svg" alt="">
                </div>
                <p>Profil</p>
            </div>
        </router-link>
    </nav>
</template>
<script>
    export default {
        name: 'st-nav-bar',
        props: {
        },
        methods: {
            selectNav(id, e) {
                let element = document.getElementsByClassName("navIcon");
                for (var i = 0; i < element.length; i++) {
                    if (element[i].classList.contains('activeNav')) {
                        element[i].classList.remove('activeNav');
                    }
                }
                element[id].classList.toggle('activeNav');
                console.log(id);
            }
        }
    }
</script>
<style>



    #navBar {
        background-color: #ffffff;
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 60px;
        top: 100.1%;
        border-radius: 4px;
        transform: translate(0, -100%);
        z-index: 100;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    }

    .navElement {
        width: 45px;
        height: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        margin-left: 10vw;
        margin-right: 10vw;
    }

    .navElement * {
        margin: 0;
    }

    .navIcon {
        border-radius: 50px;
        width: 33px;
        height: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
    }

    .activeNav {
        background-color: #cae1e4;
    }

    .navIcon > img {
        width: 100%;
        margin: 7px;
    }
</style>