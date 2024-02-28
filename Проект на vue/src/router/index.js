import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import BlogPage from '../pages/BlogPage.vue';
import BlogDetails from '../pages/BlogDetails.vue';
import ProjectPage from '../pages/ProjectPage.vue';

Vue.use(Router);

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/project', component: ProjectPage },
    { path: '*', component: BlogDetails }
];

export default new Router({
    routes
});
