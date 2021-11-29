<template>
    <footer id="footer-bar">
        <ul id="footer-content">
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
        </ul>
    </footer>
</template>

<style scoped>
#footer-bar {
    background-color: #171b24;
}
#footer-content {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #ffff;
    border-top: 1px solid #fff;
    font-size: 25px;
    height: 4vh;
}
i{
    color: white;
}
</style>