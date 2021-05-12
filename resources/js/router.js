import Vue from "vue";
import Router from "vue-router";
import index from './views/products/index.vue';
import Login from './views/auth/Login.vue';
import Register from './views/auth/Register.vue';
import CreateProduct from './views/products/CreateProduct.vue';
import EditProduct from './views/products/EditProduct.vue';

import AllCategories from './views/category/AllCategories';
import CreateCategories from './views/category/CreateCategory';

import AppLayout from './layouts/App.vue';
import GuestLayout from './layouts/Guest.vue';
 
Vue.use(Router);

export default new Router ({
    mode:"history",
    routes:[
    {
        name: 'home.create',
        path: '/',
        component:AppLayout,
        children:[{
            path:'',
            component:index
        },
        ],
    },
    {
        name: 'create',
        path: '/create',
        component: GuestLayout,
        children:[{
            path:'',
            component:CreateProduct
        },
        ],
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
    {
        name:'categories',
        path: '/category',
        component:AllCategories 
    },
     {
        name:'createCategory',
        path: '/category/create',
        component:CreateCategories 
    },
     {
        name:'userRegister',
        path: '/register',
        component:Register 
    },
    {
            path: "/dashboard",
            name: "AppLayout",
            component: index,
           beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
           }
       
          }
    ]


});



