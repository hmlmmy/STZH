import { createRouter, createWebHistory } from 'vue-router';
import ChatComponent from '../components/ChatComponent.vue';

const routes = [
  {
    path: '/',
    component: ChatComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;