<template>
    <div>
        <h2>Register</h2>
        <BookingForm />
    </div>
</template>

<script>
    import BookingForm from "@/components/Forms/BookingForm";

    export default {
        name: 'Register',
        components: {BookingForm},
        data() {
            return {}
        }
    }
</script>