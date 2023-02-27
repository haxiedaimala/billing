import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Money from '@/views/Money.vue';

const Label = () => import('@/views/Label.vue');
const Statistics = () => import('@/views/Statistics.vue');
const NotFound = () => import('@/views/NotFound.vue');
const EditLabel = () => import('@/views/EditLabel.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/label',
    component: Label,
  },
  {
    path: '/label/edit/:id',
    component: EditLabel
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
