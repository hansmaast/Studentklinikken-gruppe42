<template>
    <div class="employeeCard">
        <div class="ansattInfo">
            <div class="ansattImg">
                <img src="#" alt="">
            </div>
            <div class="infoContainer">
                <h3>{{this.name}}</h3>
                <h5>{{this.profession}}</h5>
            </div>
            <div class="infoContainer">
                <p>{{this.phoneNr}}</p>
                <p>{{this.email}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'employeeCard',
        props: {
            name: String,
            profession: String,
            phoneNr: String,
            email: String
        }
    }
</script>
<style scoped>
    h3,
    h5,
    p {
        margin: 10px 0 0 0;
        font-size: 18px;
        font-weight: bold;
    }

    h3 {
        font-size: 21px;
    }

    h5 {
        font-weight: normal;
    }

    .employeeCard {
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 350px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #ebeff2;
        border-radius: 9px;
        background-color: #FFF;
    }

    .ansattInfo {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
    }

    .ansattImg {
        border: 1px solid;
        border-radius: 50%;
        height: 50vw;
        width: 50vw;
        max-width: 155px;
        max-height: 155px;
    }

    .infoContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .ansattImg > img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1070px) {

    }
</style>