<template>
    <section>
        <base-card class="main-content">
            <base-card class='headline'>
                <h1>Tobias Tubandt</h1>
            </base-card>
            <div class="picture-wrapper">
                <img class="profile-pic" src="../../../public/images/profile-pic.png">
            </div>
            <base-card class="intro">
                <h2>Welcome to my website</h2>
                <p> I am a physics graduate with a passion for programming. In the bachelor's programm, I had my first experiences with programming and data science.
                    Since then, I started my programming journey.<br>
                    With Javascript and the framework Vue, I am able to build dynamic and complex web applications. I mainly utilize the Vue-Router and Vuex to realize such applications.<br>
                </p>
            </base-card>
        </base-card>
    </section>
</template>

<style scoped>
.picture-wrapper {
    display: flex;
    justify-content: center;
}
.profile-pic {
    border: 2px solid #000;
    border-radius: 200px;
    width: 40%;
    height: 40%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.contact {
    display: flex;
    flex-direction: column;
}
.intro{
    font-size: 1em;
    line-height: 1.5;
    border: 2px solid #000;
}
p{
    padding: 0.5rem;
}
.headline{
    text-align: center;
    font-size: 1rem;
    border: 2px solid #000;
}
@media (min-width: 650px) {
    .profile-pic {
        width: 200px;
        height: 200px;
    }
    textarea {
        padding: 0.5rem;
        border: 2px solid #000;
    }
    .headline{
        font-size: 1.5rem;
    }
}
</style>