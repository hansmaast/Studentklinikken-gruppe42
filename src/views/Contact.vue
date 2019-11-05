<template>
    <div>
        <h3>Contact us:)</h3>
        <p>Dont hesitate to give us some feedback!</p>
        <ContactForm/>
    </div>
</template>

<script>
    import ContactForm from "@/components/Forms/ContactForm";

    export default {
        name: 'Contact',
        components: { ContactForm },
        data() {
            return {
            }
        }
    }
</script>