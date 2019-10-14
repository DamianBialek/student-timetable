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
    },
    actions: {
        createLecturersTable({ commit, getters }) {
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
        loadLecturers({ commit, getters }) {
            const db = getters.db;
            db.all("SELECT `name`, `surname` FROM lecturers", [])
                .then(result => {
                    commit("loadLecturers", result);
                }, error => {
                    console.log("SELECT ERROR", error);
                });
        }
    },
    getters: {
        lecturers: state => state.lecturers,
    }
}