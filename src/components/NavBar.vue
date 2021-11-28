<template>
    <div id="navbar">
        <section id="navbar-links">
            <p>Tobias Tubandt</p>
        </section>
        <section id="navbar-rechts">
            <base-button>
                <p>Home</p>
            </base-button>
            <base-button>
                <p>About me</p>
            </base-button>
            <base-button>
                <p>Projects</p>
            </base-button>
        </section>
    </div>
</template>

<style scoped>
#navbar {
    display: flex;
    flex-direction: row;
    background-color: #171b24;
    justify-content: space-between;
    align-items: center;
    width: auto;
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
    padding: 1em 1.5em;
    line-height: 1;
    color: white;
    text-decoration: none;
}
</style>