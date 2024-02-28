<template>
    <div>
        <footer class="footer center">
            <div class="footer__left">
                <div class="footer__logo">
                    <img src="@/assets/img/Logo.svg" alt="logo" class="footer__logo-img">
                    <a href="#" class="footer__logo_title">Interno</a>
                </div>
                <p class="footer__content">It is a long established fact that a reader will be distracted lookings.</p>
            </div>
            <div class="footer__average">
                <p class="footer__content footer__content_bold">Pages</p>
                <a href="#" class="footer__content">Home</a>
                <a href="#" class="footer__content">Project</a>
                <a href="#" class="footer__content">Blog</a>
            </div>

            <div class="footer__staf"></div>

            <div class="footer__right">
                <p class="footer__content footer__content_bold">Contact</p>
                <p class="footer__content">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer__content">contact@interno.com</p>
                <p class="footer__content">(123) 456 - 7890</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'my-footer',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 101px;
    margin-bottom: 134px;
}

.footer__left {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 393px;
}

.footer__logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.footer__logo_title {
    font-family: "DM Serif Display", serif;
    font-size: 40px;
    font-weight: normal;
    line-height: 125%;
}

.footer__content {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.footer__content_bold {
    color: #292F36;
    font-family: "DM Serif Display", serif;
}

.footer__average {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer__staf {
    width: 120px;
}

.footer__right {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>