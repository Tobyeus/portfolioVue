<template>
    <section id="main">
        <div>
                <img class="profile-pic" src="../../../public/images/profile.png">
        </div>
        <base-card>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </base-card>
        <base-button @click="openForm" class="contact-me">Contact me</base-button>
        <base-card v-if="contactOpen">
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
import BaseCard from '../UI/BaseCard.vue';
export default {
    components: { BaseCard },
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
#main {
    color: #000;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
    padding: 2em;
}
.profile-pic {
    border: 4px solid #fff;
    border-radius: 200px;
    width: 200px;
    height: 200px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.contact {
    display: flex;
    flex-direction: column;
    margin: 0.5em;
}
label {
    margin: 0.5em 0;
}
input {
    height: 2em;
    padding: 0.5em;
}
textarea {
    padding: 0.5em;
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