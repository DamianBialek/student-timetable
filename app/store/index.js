import Vuex from 'vuex';
import Vue from 'nativescript-vue';

Vue.use(Vuex);

import db from './modules/db';
import subjects from './modules/subjects';
import lecturers from './modules/lecturers';
import notes from './modules/notes';

const store = new Vuex.Store({
    state: {
        openDrawer: false,
    },
    mutations: {
        changeDrawerStatus(state, status) {
            Vue.set(state, 'openDrawer', status);
        },
    },
    actions: {
        openDrawer (context) {
            context.commit('changeDrawerStatus', true);
        },
        closeDrawer (context) {
            context.commit('changeDrawerStatus', false);
        },
    },
    getters: {
        openDrawer: state => state.openDrawer,
    },
    modules: {
        db,
        subjects,
        lecturers,
        notes
    }
});

export default store;