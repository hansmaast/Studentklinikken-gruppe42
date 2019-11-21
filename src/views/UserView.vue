// This contains the components html && child components
<template>
    <div>
        <router-view class="routerView"/>
        <st-nav-bar/>
    </div>
</template>

<script>
    import StNavBar from "@/StNavBar";

    export default {
        name: 'userview',
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

