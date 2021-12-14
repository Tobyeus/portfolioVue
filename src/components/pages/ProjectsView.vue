<template>
    <section>
        <base-card class="main-content">
            <h1>Here you can find my projects</h1>
            <div>
                <base-button class="btn-project" :class="projects.kana.open ? 'btn-active' : ''" @click="clickProject('kana')">Kana Quiz App</base-button>
                <base-button class="btn-project" :class="projects.todo.open ? 'btn-active' : ''" @click="clickProject('todo')">Soon</base-button>
                <base-button class="btn-project" :class="projects.memory.open ? 'btn-active' : ''" @click="clickProject('memory')">Soon</base-button>
            </div>
            </base-card>
            <base-card v-if="projects.kana.open" class="example">
                <div class="image">
                    <img src="../../../public/images/kana-app.png" alt="">
                    <p class="project-links"> <a href="https://tobyeus.github.io/KanaAppDeploy/quiz">Production</a> | <a href="https://github.com/Tobyeus/kana-app-vue">Github</a></p>
                </div>
                <p class="description">This app is a quiz game to learn the japanese writing systems Hiragana and Katakana. Initally I wanted to practise these system myself with the app. As soon as I finished building this application I was already fluent in both alphabets.</p>
            </base-card>
            <base-card v-if="projects.todo.open" class="example">
                <div class="image">
                    <img src="" alt="">
                    <p class="project-links">Production | Github</p>
                    </div>
                    <p class="description">This just a placeholder</p>
            </base-card>
            <base-card v-if="projects.memory.open" class="example">
                <div class="image">
                    <img src="" alt="">
                    <p class="project-links">Production | Github</p>
                </div>
                <p class="description">This just a placeholder</p>
            </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: {
                kana: {
                    open: false,
                },
                todo: {
                    open: false,
                },
                memory: {
                    open: false,
                }
            }
        };
    },
    methods: {
        clickProject(project) {
            if( this.projects[project].open === true ) {
                this.projects[project].open = !this.projects[project].open;
            }else {
                this.closeAll();
                this.projects[project].open = !this.projects[project].open;
            }
        },
        closeAll() {
            this.projects.kana.open = false;
            this.projects.todo.open = false;
            this.projects.memory.open = false;
        }
    },
};
</script>

<style scoped>
.example{
    background-color: #fff;
    border-radius: 20px;
}
img{
    padding: 1em;
    width: 100%;
}
.headline{
    border: 2px solid #000;
}
.btn-project{
    margin: 0 0.5em;
    margin: 1em 0.5em;
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
}
.image{
    transition: 0.4s;
}
.description{
    padding: 2em;
}
.project-links{
    text-align: center;
}
p{
    font-size: 1.2rem;
}
</style>