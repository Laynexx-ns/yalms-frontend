import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Index from "@/pages/index.vue";

import Queue from "@/pages/queue.vue";
import ExpressionsList from "@/pages/expressions-list.vue";
import MyCalculator from "@/pages/my-calculator.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/calculate', component: MyCalculator },
    { path: '/queue', component: Queue},
    {path: '/expressions', component: ExpressionsList}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})