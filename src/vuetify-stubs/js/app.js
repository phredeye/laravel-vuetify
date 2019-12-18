import Vuetify from 'vuetify'
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('login-button', require('./components/LoginButtonComponent.vue').default);
Vue.component('register-button', require('./components/RegisterButtonComponent.vue').default);
Vue.component('snackbar', require('./components/SnackBarComponent.vue').default);

window.Vuetify = require('vuetify');
Vue.use(Vuetify)

import store from './store'
import * as actions from './store/action-types'
import * as mutations from './store/mutation-types'

import { mapGetters } from 'vuex'

if (window.user ) {
  store.commit(mutations.USER,  user)
  store.commit(mutations.LOGGED, true)
}

const app = new Vue({
    el: '#app',
    store,
    vuetify: new Vuetify()
});
