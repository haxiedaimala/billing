import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';

const app = createApp(App);
app.component('Layout', Layout);
app.use(store).use(router).mount('#app');
