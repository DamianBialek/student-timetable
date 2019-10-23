import Vue from "nativescript-vue";

export default {
    state: {
        notes: [],
    },
    mutations: {
        loadNotes(state, payload) {
            Vue.set(state, 'notes', payload);
        },
        addNewNote(state, payload) {
            state.notes.push(payload);
        },
        updateNote(state, payload) {
            Vue.set(state, 'notes', [
                ...state.notes.filter(({ id }) => id !== payload.id),
                payload,
            ]);
        },
        removeNote(state, payload) {
            Vue.set(state, 'notes', [...state.notes.filter(({ id }) => id !== payload.id)]);
        }
    },
    actions: {
        createNotesTable({ getters }) {
            const db = getters.db;
            db.execSQL("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, `subject` INTEGER, `name` VARCHAR(64), `description` TEXT)")
                .then(() => {
                    console.log("Created table notes !");
                }, (error) => {
                    console.log("CREATE TABLE ERROR", error);
                });
        },
        loadNotes({ commit, getters }) {
            const db = getters.db;
            db.all("SELECT `id`, `subject`, `name`, `description` FROM notes", [])
                .then(result => {
                    commit("loadNotes", result);
                }, error => {
                    console.log("SELECT ERROR", error);
                });
        },
        addNewNote({ commit, getters }, note) {
            const db = getters.db;
            db.execSQL("INSERT INTO notes (`name`, `description`, `subject`) VALUES (?, ?, ?)", [note.name, note.description, note.subject.id])
                .then(() => {
                    commit("addNewNote", note);
                }, error => {
                    console.log("INSERT ERROR", error);
                });
        },
        updateNote({ commit, getters }, note) {
            const db = getters.db;
            db.execSQL("UPDATE notes SET `name` = ?, `description` = ?, `subject` = ? WHERE `id` = ? ", [note.name, note.description, note.subject.id, note.id])
                .then(() => {
                    commit("updateNote", note);
                    console.log("Success update note !");
                }, error => {
                    console.log("UPDATE ERROR", error);
                });
        },
        removeNote({ commit, getters }, note) {
            const db = getters.db;
            db.execSQL("DELETE FROM notes WHERE `id` = ? ", [note.id])
                .then(() => {
                    commit("removeNote", note);
                    console.log("Success remove note !");
                }, error => {
                    console.log("DELETE ERROR", error);
                });
        },
    },
    getters: {
        notes: state => state.notes,
    }
}