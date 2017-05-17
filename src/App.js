import vMediaQuery from 'v-media-query';
import VueResource from 'vue-resource';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Search from './components/Search.vue';
import Menu from './components/Menu.vue';

function plugin (Vue) {
    Vue.use(VueResource);
    Vue.use(vMediaQuery);
    Vue.component('fa-header', Header);
    Vue.component('fa-navigation', Navigation);
    Vue.component('fa-search', Search);
    Vue.component('fa-menu', Menu);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

export {
    Header,
    Navigation,
    Search,
    Menu
}