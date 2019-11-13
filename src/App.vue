// This contains the components html && child components
<template>
    <div id="app">
        <router-view class="routerView"/>
    </div>
</template>

<!-- This contains the components Vue instance information && JS -->
<script>

    // Tells the component what to export
    export default {
        name: 'app',
        components: {
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

    select,
    textarea {
        outline: none;
        margin: 5px 10px;
        font-size: 1em;
        padding: 0.7em;
        border-radius: 4px;
        border: 1px solid rgba(53, 73, 94, 0.3);
        box-shadow: 0px 5px 10px rgba(53, 73, 94, 0.2);
        transition: all 0.3s;
    }

    input,
    button {
        text-align: center;
    }

    button {
        padding: 0.7em 20px;
        background: rgba(65, 184, 131, 0.44);
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
</style>
