<template>
    <div>
        <LoginOrRegister></LoginOrRegister>
        <BookingForm></BookingForm>
        <ContactForm></ContactForm>
    </div>
</template>

<script>
    import BookingForm from "@/components/Forms/BookingForm";
    import LoginOrRegister from "@/components/Forms/LoginOrRegister";
    import ContactForm from "@/components/Forms/ContactForm";

    export default {
        name: 'Forms',
        components: {ContactForm, BookingForm, LoginOrRegister}
    }
</script>

<style>

</style>