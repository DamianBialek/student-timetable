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
        },
        updateSubject(state, payload) {
            Vue.set(state, 'subjects', [
                ...state.subjects.filter(({ id }) => id !== payload.id),
                payload,
            ]);
        },
        removeSubject(state, payload) {
            Vue.set(state, 'subjects', [...state.subjects.filter(({ id }) => id !== payload.id)]);
        }
    },
    actions: {
        createSubjectsTable({ getters }) {
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
            db.execSQL("INSERT INTO subjects (`name`, `lecturer`) VALUES (?, ?)", [subject.name, subject.lecturer.id])
                .then(() => {
                    commit("addNewSubject", subject);
                }, error => {
                    console.log("INSERT ERROR", error);
                });
        },
        updateSubject({ commit, getters }, subject) {
            const db = getters.db;
            db.execSQL("UPDATE subjects SET `name` = ?, `lecturer` = ? WHERE `id` = ? ", [subject.name, subject.lecturer.id, subject.id])
                .then(() => {
                    commit("updateSubject", subject);
                    console.log("Success update subject !");
                }, error => {
                    console.log("UPDATE ERROR", error);
                });
        },
        loadSubjects({ commit, getters }) {
            const db = getters.db;
            db.all("SELECT `id`, `name`, `lecturer` FROM subjects", [])
                .then(result => {
                    commit("loadSubjects", result);
                }, error => {
                    console.log("SELECT ERROR", error);
                });
        },
        removeSubject({ commit, getters }, subject) {
            const db = getters.db;
            db.execSQL("DELETE FROM subjects WHERE `id` = ? ", [subject.id])
                .then(() => {
                    commit("removeSubject", subject);
                    console.log("Success remove subject !");
                }, error => {
                    console.log("DELETE ERROR", error);
                });
        }
    },
    getters: {
        subjects: state => state.subjects,
        subject: state => (id) => state.subjects.find(subject => subject.id === id),
    }
}