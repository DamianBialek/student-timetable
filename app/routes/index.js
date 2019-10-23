import Home from '~/views/Home.vue'
import Subjects from "~/views/Subjects/Subjects.vue";
import AddNewSubject from "~/views/Subjects/AddNewSubject.vue";
import EditSubject from "~/views/Subjects/EditSubject";
import Lecturers from "~/views/Lecturers/Lecturers.vue";
import AddNewLecturer from "~/views/Lecturers/AddNewLecturer";
import EditLecturer from "~/views/Lecturers/EditLecturer";
import Notes from "~/views/Notes/Notes";
import AddNewNote from "~/views/Notes/AddNewNote";
import EditNote from "~/views/Notes/EditNote";


export default {
    '/home': {
        component: Home,
        meta: {
            name: 'Home'
        }
    },
    '/subjects': {
        component: Subjects,
        meta: {
            name: 'Subjects'
        }
    },
    '/addNewSubject': {
        component: AddNewSubject,
        meta: {
            name: 'AddNewSubject'
        }
    },
    '/editSubject': {
        component: EditSubject,
        meta: {
            name: 'EditSubject'
        }
    },
    '/lecturers': {
        component: Lecturers,
        meta: {
            name: 'Lecturers'
        }
    },
    '/addNewLecturer': {
        component: AddNewLecturer,
        meta: {
            name: 'AddNewLecturer'
        }
    },
    '/editLecturer': {
        component: EditLecturer,
        meta: {
            name: 'EditLecturer'
        }
    },
    '/notes': {
        component: Notes,
        meta: {
            name: 'Notes'
        }
    },
    '/addNewNote': {
        component: AddNewNote,
        meta: {
            name: 'AddNewNote'
        }
    },
    '/editNote': {
        component: EditNote,
        meta: {
            name: 'EditNote'
        }
    }
}