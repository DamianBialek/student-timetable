import Vue from "nativescript-vue";

const SQLite  = require("nativescript-sqlite");

export default {
    state: {
        db: {},
    },
    mutations: {
        setDb(state, payload) {
            Vue.set(state, 'db', payload);
        },
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
    },
    getters: {
        db: state => state.db,
    }
}