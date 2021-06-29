import { createRouter, createWebHistory } from "vue-router"
import About from '../views/About'
import Home from '../views/Home'

const routes = [
    { 
        path: '/about',
        name: 'about',
        component: About 
    },
    { 
        path: '/home',
        name: 'home',
        component: Home 
    }
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router