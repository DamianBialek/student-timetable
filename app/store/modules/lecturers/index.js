import Vue from "nativescript-vue";

export default {
    state: {
        lecturers: [],
    },
    mutations: {
        loadLecturers(state, payload) {
            Vue.set(state, 'lecturers', payload);
        },
        addNewLecturer(state, payload) {
            state.lecturers.push(payload);
        },
        updateLecturers(state, payload) {
            Vue.set(state, 'lecturers', [
                ...state.lecturers.filter(({ id }) => id !== payload.id),
                payload,
            ]);
        },
        removeLecturer(state, payload) {
            Vue.set(state, 'lecturers', [...state.lecturers.filter(({ id }) => id !== payload.id)]);
        }
    },
    actions: {
        createLecturersTable({ getters }) {
            const db = getters.db;
            db
                .execSQL("CREATE TABLE IF NOT EXISTS lecturers (id INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(64), `surname` VARCHAR(64))")
                .then(() => {
                    console.log("Created table lecturers !");
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
        },
        addNewLecturer({ commit, getters }, lecturer) {
            const db = getters.db;
            db.execSQL("INSERT INTO lecturers (`name`, `surname`) VALUES (?, ?)", [lecturer.name, lecturer.surname])
                .then(() => {
                    commit("addNewLecturer", lecturer);
                }, error => {
                    console.log("INSERT ERROR", error);
                });
        },
        updateLecturer({ commit, getters }, lecturer) {
            const db = getters.db;
            db.execSQL("UPDATE lecturers SET `name` = ?, `surname` = ? WHERE `id` = ? ", [lecturer.name, lecturer.surname, lecturer.id])
                .then(() => {
                    commit("updateLecturers", lecturer);
                    console.log("Success update lecturer !");
                }, error => {
                    console.log("UPDATE ERROR", error);
                });
        },
        loadLecturers({ commit, getters }) {
            const db = getters.db;
            return db.all("SELECT `id`, `name`, `surname` FROM lecturers", [])
                .then(result => {
                    commit("loadLecturers", result);
                }, error => {
                    console.log("SELECT ERROR", error);
                });
        },
        removeLecturer({ commit, getters }, lecturer) {
            const db = getters.db;
            db.execSQL("DELETE FROM lecturers WHERE `id` = ? ", [lecturer.id])
                .then(() => {
                    commit("removeLecturer", lecturer);
                    console.log("Success remove lecturer !");
                }, error => {
                    console.log("DELETE ERROR", error);
                });
        }
    },
    getters: {
        lecturers: state => state.lecturers,
        lecturer: state => (id) => state.lecturers.find(lecturer => lecturer.id === id),
    }
}