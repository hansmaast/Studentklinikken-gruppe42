// This contains the components html && child components
<template>
    <div id="app">
        <router-view class="routerView"/>
        <st-nav-bar/>
    </div>
</template>

<!-- This contains the components Vue instance information && JS -->
<script>

    // Tells the component what to export
    import StNavBar from "@/StNavBar";

    export default {
        name: 'app',
        components: {
            StNavBar
            // Always declare the component you want to render
        },
        data() {
            // This is kind of the same as props? Hmm... Its sort of like a variable you can send to the components props?
            return {}
        },
        methods: {}
    }
</script>

<!-- This contains the components optional CSS -->
<!-- If "scoped" is not applied, the style will also affect the child components -->
<style>
    :root {
        --main-gray: #9d9d9d;
    }

    body {
        margin: 0;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        width: 100%;
        overflow: hidden;
    }

    h1 {
        font-size: 32px;
        margin-top: 67px;
        margin-bottom: 42px;
    }

    h2 {
        font-size: 32px;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        color: #333333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .routerView {
        height: 100vh;
        width: 100vw;
    }

    .mainContainer {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: scroll;
    }


    p {
        font-size: 14px;
    }

    .ingress {
        text-align: center;
        width: 85vw;
        max-width: 400px;
        font-size: 14px;
    }

    input,
    button {
        text-align: center;
    }

    button {
        padding: 0.7em 20px;
        background: rgba(65, 184, 131, 0.44);
        /*Removes border on every button*/
        border: none;
    }

    .bold {
        font-weight: bold;
    }

    .center {
        text-align: center;
    }

    input:focus {
        box-shadow: 0px 5px 15px rgba(53, 73, 94, 0.4);
    }

    button:active {
        background: rgba(76, 228, 165, 0.96);
        box-shadow: 0px 5px 15px rgba(53, 73, 94, 0.4);
    }
    @media (min-width: 770px) {
        #navBar {
            top: 0%;
            transform: translate(0, 0%);
        }
        .routerView {
            margin-top: 61px;
            height: 100vh;
            width: 100vw;
        }
        .navElement {
            margin-left: 5vw;
            margin-right: 5vw;
        }
    }
</style>
