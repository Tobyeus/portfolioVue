<template>
    <section id="navbar">
        <div id="navbar-links">
            <icon-button>
                <a class='btn-contact' href='https://github.com/Tobyeus'><i class="fab fa-github"></i></a>
            </icon-button>
            <icon-button>
                <a class='btn-contact' href='https://www.linkedin.com/in/tobias-tubandt-70aa061b5/'><i class="fab fa-linkedin-in"></i></a>
            </icon-button>
            <icon-button>
                <a class='btn-contact' href='https://twitter.com/Tobyeus90'><i class="fab fa-twitter"></i></a>
            </icon-button>
            <icon-button>
                <a class='btn-contact' href='mailto:ttubandt90@outlook.de'><i class="far fa-envelope"></i></a>
            </icon-button>
        </div>
        <div id="navbar-rechts">
            <base-button>
                <router-link class="nav-link" to="/home">Home</router-link>
            </base-button>
            <base-button>
                <router-link class="nav-link" to="/about">About me</router-link>
            </base-button>
            <base-button>
                <router-link class="nav-link" to="/projects">Projects</router-link>
            </base-button>
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
.nav-link{
    text-decoration: none;
    color: white;
}
i{
    color: white;
}
</style>