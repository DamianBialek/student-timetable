import Vuex from 'vuex';
import Vue from 'nativescript-vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        openDrawer: false
    },
    mutations: {
        changeDrawerStatus (state, status) {
            state.openDrawer = status;
        }
    },
    actions: {
        openDrawer (context) {
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