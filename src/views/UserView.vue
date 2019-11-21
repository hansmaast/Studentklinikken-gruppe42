// This contains the components html && child components
<template>
        <router-view class="routerView"/>
</template>

<script>

    export default {
        name: 'userview',
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

