<template>
    <div class="inputContainer">
        <label>{{label}}</label>
        <input
                :type="this.type"
                :placeholder="this.placeholder"
        />
        <div class="iconContainer">
            <img src="../../../public/icon/keyIcon.svg" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'st-input-password',
        props: {
            label: String,
            type: String,
            placeholder: String,
        }
    }
</script>

<style scoped>

    * {
        font-size: 14px;
    }

    .inputContainer {
        border-bottom: 1px solid #9d9d9d;
        height: 61px;
        width: 271px;
        padding-bottom: 10px;
        margin-bottom: 20px;
        display: grid;
        justify-content: flex-start;
        align-items: flex-end;
        grid-template-areas:
                        "a a a a"
                        "b c c c";
    }
    label {
        justify-self: left;
        grid-area: a;
    }

    input {
        grid-area: c;
        width: 230px;
        margin-left: 5px;
        border: none;
        outline: none;
        box-shadow: none;
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