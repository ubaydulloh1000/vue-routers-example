import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '@/views/jobs/JobsView.vue'
import JobsDetailView from '@/views/jobs/JobsDetailView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/jobs/',
    name: 'jobs',
    component: JobsView,
  },
  {
    path: '/jobs/:id/',
    name: 'job-detail',
    component: JobsDetailView,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
