//组装模块并导出store的 地方
import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		cart
	},
	strict: process.env.NODE_ENV !== 'production'
})