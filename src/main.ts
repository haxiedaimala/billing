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


if (document.documentElement.clientWidth > 500) {
  window.alert('请手机打开页面，以保证浏览效果');
  const imgItem = document.createElement('img');
  imgItem.src = '/qrcode.png';
  document.body.appendChild(imgItem);
  imgItem.style.width = '20%';
  imgItem.style.position = 'fixed';
  imgItem.style.left = '50%';
  imgItem.style.top = '50%';
  imgItem.style.transform = 'translate(-50%,-50%)';
  imgItem.style.boxShadow = '0 0 10px rgba(0,0,0,.25)';
}
