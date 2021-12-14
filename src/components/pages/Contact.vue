<template>
    <section>
        <base-card class="contact-card">
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
        <base-card class="message" v-if="messageSent || messageError">
            <p v-if="messageSent">Your message has been sent. Thank you for reaching out!</p>
            <p v-if="messageError">There has been an error. Please try again.</p>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            subject: '',
            text: '',
            formInvalid: false,
            messageSent: false,
            messageError: false,
        };
    },
    methods: {
        async sendEmail(){
            if ( this.name.trim() === '' || this.subject.trim() === '' || this.text.trim() === '') {
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
            if( response.ok ) {
                this.messageSent = true;
            } else {
                this.messageError = true;
            }
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
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 500;
    padding: 1.0rem 1.5rem;
}
label {
    margin: 0.75em 0;
}
input {
    font-size: 1rem;
    height: 2rem;
    border: 2px solid #000;
}
textarea {
    border: 2px solid #000;
}
.send-button{
    margin-top: 1rem;
    padding: 0.5rem;
    text-align: center;
    width: 30%;
    color: #000;
    border: 2px solid #000;
    font-size: 1rem;
    font-weight: 500;
}
.error{
    color: red;
    margin-top: 0.5rem;
}
h1{
    padding: 0.5rem;
    text-align: center;
}
p{
    padding: 0.5rem;
}
.message {
    font-size: 1rem;
    font-weight: 500;
}
@media (min-width: 650px) {
    .contact {
    font-size: 1.3rem;
    font-weight: 600;
    }
    .send-button{
    font-size: 1.5rem;
    font-weight: 700;
    }
    .message {
    font-size: 1.2rem;
    }     
}
</style>