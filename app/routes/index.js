import Home from '~/views/Home.vue'
import Subjects from "~/views/Subjects";


export default {
    '/home': {
        component: Home,
    },
    '/subjects': {
        component: Subjects,
    }
}