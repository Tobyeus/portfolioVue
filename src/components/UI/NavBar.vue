<template>
    <section id="navbar">
        <div id="navbar-links">
            <a href='https://github.com/Tobyeus'>
                <icon-button class="btn-contact">
                    <i class="fab fa-github"></i>
                </icon-button>
            </a>
            <a href='https://www.linkedin.com/in/tobias-tubandt-70aa061b5/'>
                <icon-button class="btn-contact">
                    <i class="fab fa-linkedin-in"></i>
                </icon-button>
            </a>
            <a href='https://twitter.com/Tobyeus90'>
                <icon-button class="btn-contact">
                    <i class="fab fa-twitter"></i>
                </icon-button>
            </a>
        </div>
        <div id="navbar-rechts">
            <router-link class="nav-link" to="/home">
                <base-button class='btn-nav'>Home</base-button>
            </router-link>
            <router-link class="nav-link" to="/about">
                <base-button class='btn-nav'>About</base-button>
            </router-link>
            <router-link class="nav-link" to="/projects">
                <base-button class='btn-nav'>Projects</base-button>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
#navbar {
    display: flex;
    flex-direction: row;
    /* background-color: #171b24; */
    justify-content: space-between;
    align-items: center;
    width: auto;
    text-decoration: none;
    height: 10vh;
    padding: 1.5em;
}
#navbar-rechts{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
#navbar-links{
    background: none;
    display: flex;
    flex-direction: row;
    align-content: center;
    border: 2px solid #fff;
    font-size: 1em;
    color: white;
    text-decoration: none;
}
.btn-contact{
    transition: 0.4s;
    color: #fff;
}
.btn-contact:hover{
    background-color: #fff;
    color: #000;
}
a{
}
.btn-nav{
    margin: 0 0.5em;
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: #fff;
    border: 2px solid #fff;
}
</style>