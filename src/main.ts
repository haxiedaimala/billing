import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

const app = createApp(App);
app.component('Layout', Layout);
app.component('Icon', Icon);
app.use(store).use(router).mount('#app');
