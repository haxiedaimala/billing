import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';

const app = createApp(App);
app.component('Nav', Nav);
app.use(store).use(router).mount('#app');
