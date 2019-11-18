<template>
    <div class="selectFields">
        <select v-model="treatment" name="treatment" id="selectTreatment">
            <option value="Akupunktur">Akupunktur</option>
            <option value="Kostholdsveiledning">Kostholdsveiledning</option>
            <option value="Osteopati">Osteopati</option>
            <option value="Fysiologisk testlab">Fysiologisk testlab</option>
        </select>
        <select v-model="price" name="prisKlasse" id="selectPrice">
            <option value="200">Voksen</option>
            <option value="150">Student</option>
            <option value="150">Honnør</option>
            <option value="150">Ansatt</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'st-booking-selector',
        props: {
            price: {},
            treatment: {}
        }
    }
</script>
<style scoped>

    .selectFields {
        width: 85vw;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .selectFields > select {
        width: 100%;
        margin-bottom: 15px;
    }

    select {
        border: 0;
        outline: none;
        background-color: inherit;
        border-bottom: 1px solid;
        border-radius: 0;
        appearance: none; /* Remove default arrow */
        background-image: url(../../public/icon/arrowDown.svg); /* Add custom arrow */
        background-repeat: no-repeat;
        background-position: right;
        font-size: 18px;
        padding: 0 5px 5px 5px;
    }
</style>