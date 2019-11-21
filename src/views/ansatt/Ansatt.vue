// This contains the components html && child components
<template>
    <div>
        <router-view class="routerView"/>
    </div>
</template>

<script>
    import StBigBtn from "../../components/Buttons/StBigBtn";

    export default {
        name: 'ansatt',
        components: {
            // Always declare the component you want to render
            StBigBtn
        },
        data() {
            // This is kind of the same as props? Hmm... Its sort of like a variable you can send to the components props?
            return {}
        },
        methods: {}
    }
</script>
