/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// window.Vue = require('vue'); 
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
// import VueSidebarMenu from 'vue-sidebar-menu';
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import '../css/app.css';

import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './router';


/**

 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(BootstrapVue);

Vue.use(VueAxios, axios);
 


new Vue({
    el: '#app',
    router,
    render: h => h(App),
});

