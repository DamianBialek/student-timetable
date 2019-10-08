import Vuex from 'vuex';
import Vue from 'nativescript-vue';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        openDrawer: false,
        activeRoute: null
    },
    mutations: {
        changeDrawerStatus (state, status) {
            Vue.set(state, 'openDrawer', status);
        },
        setActiveRoute(state, route) {
            state.activeRoute = route;
        }
    },
    actions: {
        openDrawer (context) {
            console.log("adwd");
            context.commit('changeDrawerStatus', true);
        },
        closeDrawer (context) {
            context.commit('changeDrawerStatus', false);
        }
    },
    getters: {
        openDrawer: state => state.openDrawer,
    }
})