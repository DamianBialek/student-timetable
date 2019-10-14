import Vue from "nativescript-vue";

export default {
    state: {
        subjects: [],
    },
    mutations: {
        loadSubjects(state, payload) {
            Vue.set(state, 'subjects', payload);
        },
        addNewSubject(state, payload) {
            state.subjects.push(payload);
        }
    },
    actions: {
        createSubjectsTable({ commit, getters }) {
            const db = getters.db;
            db.execSQL("CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(64), `lecturer` INTEGER)")
                .then(() => {
                    console.log("Created table subjects !");
                }, (error) => {
                    console.log("CREATE TABLE ERROR", error);
                });
        },
        addNewSubject({ commit, getters }, subject) {
            const db = getters.db;
            db.execSQL("INSERT INTO subjects (`name`, `lecturer`) VALUES (?, ?)", [subject.name, subject.lecturer])
                .then(() => {
                    commit("addNewSubject", subject);
                }, error => {
                    console.log("INSERT ERROR", error);
                });
        },
        loadSubjects({ commit, getters }) {
            const db = getters.db;
            db.all("SELECT `name`, `lecturer` FROM subjects", [])
                .then(result => {
                    commit("loadSubjects", result);
                }, error => {
                    console.log("SELECT ERROR", error);
                });
        }
    },
    getters: {
        subjects: state => state.subjects,
    }
}