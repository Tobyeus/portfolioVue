<template>
    <section>
        <base-card class="main-content">
            <base-card class='headline'>
                <h1>I am Tobias Tubandt</h1>
            </base-card>
            <div>
                    <img class="profile-pic" src="../../../public/images/profile.png">
            </div>
            <base-card class="intro">
                <h2>Welcome to my website</h2>
                <p> I am a physics graduate with a passion for programming.<br></p>
            </base-card>
        </base-card>
    </section>
</template>

<style scoped>
.profile-pic {
    border: 2px solid #000;
    border-radius: 200px;
    width: 200px;
    height: 200px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.contact {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
}
.intro{
    font-size: 1em;
    line-height: 1.5;
    border: 2px solid #000;
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
p{
    padding-top: 0.5em;
}
.headline{
    font-size: 1.5em;
    border: 2px solid #000;
}
</style>