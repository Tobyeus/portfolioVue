<template>
    <section id="navbar">
        <div id="navbar-links">
            <p>Tobias Tubandt</p>
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
    background-color: #171b24;
    justify-content: space-between;
    align-items: center;
    width: auto;
    border-bottom: 1px solid #fff;
    text-decoration: none;
}
#navbar-rechts{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
#navbar-links{
    background: none;
    border: 2px solid #171b24;
    font-size: 2em;
    font-weight: 600;
    padding: 0.5em;
    line-height: 1;
    color: white;
    text-decoration: none;
}
.nav-link{
    text-decoration: none;
    color: white;
}
</style>