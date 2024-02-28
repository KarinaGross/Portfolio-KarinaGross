<template>
    <div>
        <header class="header center">
            <div class="header__left">
                <img src="@/assets/img/Logo.svg" alt="logo" class="header__left_logo">
                <a href="#" class="header__left_title">Interno</a>
            </div>
            <div class="header__right">
                <router-link to="/" class="header__right_menu-item">Home</router-link>
                <router-link to="/project" href="#" class="header__right_menu-item">Project</router-link>
                <router-link to="/blog" href="#" class="header__right_menu-item">Blog</router-link>
            </div>
        </header>
    </div>
</template>

<script>
// import router from '@/router';

export default {
    name: 'my-header',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    // components: { router }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 53px;
    padding-bottom: 56px;
}

.header__left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.header__left_title {
    font-family: "DM Serif Display", serif;
    font-size: 40px;
    font-weight: normal;
    line-height: 125%;
    color: #292F36;
}

.header__right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 50px;
    align-items: center;
}

.header__right_menu-item {
    color: #292F36;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
}
</style>