import Vuex from 'vuex';
import Vue from 'nativescript-vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        openDrawer: false,
        subjects: [],
        lecturers: []
    },
    mutations: {
        changeDrawerStatus(state, status) {
            Vue.set(state, 'openDrawer', status);
        },
        addNewSubject(state, payload) {
            state.subjects.push(payload);
        },
        addNewLecturer(state, payload) {
            state.lecturers.push(payload);
        }
    },
    actions: {
        openDrawer (context) {
            context.commit('changeDrawerStatus', true);
        },
        closeDrawer (context) {
            context.commit('changeDrawerStatus', false);
        },
        addNewSubject({ commit }, subject) {
            commit("addNewSubject", subject);
        },
        addNewLecturer({ commit }, lecturer) {
            commit("addNewLecturer", lecturer);
        }
    },
    getters: {
        openDrawer: state => state.openDrawer,
        subjects: state => state.subjects,
        lecturers: state => state.lecturers,
    }
})