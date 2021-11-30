<template>
    <section>
        <base-card>
            <h1>About me</h1>
            <p>What do I do? What is my tech stack? Education? Hobbies? Goals? Future?</p>
        </base-card>
        <base-button @click="openForm" class="contact-me">Contact me</base-button>
        <base-card class="contact-card" v-if="contactOpen">
            <form class="contact" action="contact">
                <label for="name">Name:</label>
                <input type="text" v-model="name">
                <label for="subject">Subject:</label>
                <input type="text" v-model="subject">
                <label for="mail-content">Message:</label>
                <textarea name="mail-content" id="mail-text" cols="30" rows="10" v-model="text"></textarea>
                <base-button class="send-button" @click.prevent="sendEmail">Send</base-button>
                <p class="error" v-if="formValidation">Please fill all fields</p>
            </form>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            contactOpen: false,
            name: '',
            subject: '',
            text: '',
            formInvalid: false,
        };
    },
    methods: {
        openForm(){
            this.contactOpen = !this.contactOpen;
            this.formInvalid = false;
        },
        async sendEmail(){

            if ( this.name.trim() === '' || this.subject.trim() === '' || this.name.text.trim() === '') {
                this.formInvalid = true;
                return;
            }

            const response = await fetch('https://portfolio-messages-b1575-default-rtdb.europe-west1.firebasedatabase.app/messages.json',{
                method: 'POST',
                body: JSON.stringify({
                    name: this.name,
                    subject: this.subject,
                    text: this.text,
                })
            });
            console.log(response);
            this.name = '';
            this.subject = '';
            this.text = '';
            this.contactOpen = false;
        },
    },
    computed: {
            formValidation(){
                if( this.formInvalid ){
                    return true;
                }else {
                    return false;
                }
            }
    }
};
</script>

<style scoped>
section {
    
}
.contact {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
}
label {
    margin: 0.5em 0;
}
input {
    height: 2em;
    padding: 0.5em;
    border: 2px solid #000;
}
textarea {
    padding: 0.5em;
    border: 2px solid #000;
}
.contact-me {
    margin: 0 0.5em;
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: #fff;
    border: 2px solid #fff;
}
.send-button{
    margin-top: 1em;
    padding: 0.5em;
    text-align: center;
    width: 30%;
    color: #000;
    border: 2px solid #000;
}
.error{
    color: red;
    margin-top: 0.5em;
}
</style>