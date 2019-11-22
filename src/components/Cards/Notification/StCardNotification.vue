<template>
    <div class="notification">
        <h6>{{date}}</h6>
        <p>{{text}}</p>
    </div>
</template>
<script>
    export default {
        name: 'st-card-notification',
        props: {
            date: String,
            text: String
        }
    }
</script>
<style scoped>
.notification {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px 20px;
    box-sizing: border-box;
}
    .notification * {
        margin: 0;
        text-align: left;
    }

.notification:nth-child(even) {background: #FFF}
.notification:nth-child(odd) {background: rgba(196, 196, 196, 0.06);}
</style>