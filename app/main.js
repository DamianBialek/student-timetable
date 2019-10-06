import Vue from 'nativescript-vue';
import App from './components/App';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import FontIcon from './components/FontIcon.vue';
import RadSideDrawerPlugin from "nativescript-ui-sidedrawer/vue";
import Navigator from "nativescript-vue-navigator";
import routes from "./routes";
import store from "./store";

Vue.component(FontIcon.name, FontIcon);
Vue.use(RadSideDrawerPlugin);
Vue.use(Navigator, { routes });

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

Vue.config.silent = (TNS_ENV === 'production');


new Vue({
  render: h => h('frame', [h(App)]),
  store: store
}).$start();
