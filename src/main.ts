import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ServiceView from './views/ServiceView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
import reveal from './directives/reveal'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/leistungen/:slug', component: ServiceView },
    { path: '/referenzen', component: ProjectsView },
    { path: '/kontakt', component: ContactView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

const app = createApp(App)
app.directive('reveal', reveal)
app.use(router).mount('#app')
