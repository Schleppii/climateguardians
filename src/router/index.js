import {
    createRouter, createWebHistory
} from "vue-router"

import Impressum from "@/views/Impressum.vue"
import Cookies from "@/views/Cookies.vue"
import Nutzung from "@/views/Nutzung.vue"
import EmissionenInfo from "@/views/EmissionenInfo.vue"
import EmissionenView from "@/views/EmissionenView.vue"
import Klimawandel from "@/views/Klimawandel.vue"
import Startseite from "@/App.vue"
import Datenschutz from "@/views/Datenschutz.vue"

const routes = [{
    path: "/",
    component: Startseite
},
{
    path: "/datenschutz",
    component: Datenschutz
},
{
    path: "/cookies",
    component: Cookies
},
{
    path: "/nutzungsrichtlinien",
    component: Nutzung
},
{
    path: "/emissioneninfo",
    component: EmissionenInfo
},
{
    path: "/emissionenview",
    component: EmissionenView
},
{
    path: "/klimawandel",
    component: Klimawandel
},
{
    path: "/impressum",
    component: Impressum,
}]
const router= createRouter ({history:createWebHistory(),routes})
export default router;
