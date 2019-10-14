import Vuex from 'vuex';
import Vue from 'nativescript-vue';

const SQLite  = require("nativescript-sqlite");

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        openDrawer: false,
        subjects: [],
        lecturers: [],
        db: {}
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
        },
        setDb(state, payload) {
            Vue.set(state, 'db', payload);
        },
        loadSubjects(state, payload) {
            Vue.set(state, 'subjects', payload);
        },
        loadLecturers(state, payload) {
            Vue.set(state, 'lecturers', payload);
        }
    },
    actions: {
        initDb({ commit, dispatch }) {
            (new SQLite("database.db")).then((db) => {
                console.log("Is db open ? ", db.isOpen() ? "Yes" : "No");
                if(db.isOpen()) {
                    db.resultType(SQLite.RESULTSASOBJECT);
                    commit("setDb", db);
                    dispatch("createSubjectsTable");
                    dispatch("createLecturersTable");
                }
            }, (error) => {
                console.log("OPEN DB ERROR", error);
            })
        },
        createSubjectsTable({ commit, getters }) {
            const db = getters.db;
            db
                .execSQL("CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(64), `lecturer` INTEGER)")
                .then(id => {
                    console.log("Created table subjects !");
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
        },
        createLecturersTable({ commit, getters }) {
            const db = getters.db;
            db
                .execSQL("CREATE TABLE IF NOT EXISTS lecturers (id INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(64), `surname` VARCHAR(64))")
                .then(id => {
                    console.log("Created table lecturers !");
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
        },
        openDrawer (context) {
            context.commit('changeDrawerStatus', true);
        },
        closeDrawer (context) {
            context.commit('changeDrawerStatus', false);
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
        openDrawer: state => state.openDrawer,
        subjects: state => state.subjects,
        lecturers: state => state.lecturers,
        db: state => state.db,
    }
})