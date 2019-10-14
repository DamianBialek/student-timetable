import Vue from 'nativescript-vue';
import App from './components/App';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import FontIcon from './components/FontIcon.vue';
import RadSideDrawerPlugin from "nativescript-ui-sidedrawer/vue";
import Navigator from "nativescript-vue-navigator";
import routes from "./routes";
import store from "./store";
import { topmost } from 'ui/frame';

Vue.component(FontIcon.name, FontIcon);
Vue.use(RadSideDrawerPlugin);
Vue.use(Navigator, { routes });

store.dispatch("initDb");

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

Vue.config.silent = (TNS_ENV === 'production');

Vue.prototype.$navigator.navigate = function(to, options) {
    const matchedRoute = routes[to];

    if (!matchedRoute) {
      if (TNS_ENV === 'development') {
        throw new Error(`Navigating to a route that does not exist: ${to}`)
      }
      return false
    }
    return topmost().currentPage.__vuePageRef__.$navigateTo(matchedRoute.component, options);
};

Vue.prototype.$navigator.back = function(...args) {
  return topmost().currentPage.__vuePageRef__.$navigateBack.call(this, args);
};

new Vue({
  render: h => h(App),
  store: store
}).$start();
